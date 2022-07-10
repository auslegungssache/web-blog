---
title: Simple API authentication in ASP.NET with JWTs
date: 8. April 2022
description: How to set up JWT authentication in ASP.NET 6.
---

Browsing for tutorials on adding authentication to a modern ASP.NET project, one would think it’d be a monumental task
when things like “Identity server”, Azure and sessions pop up.. I’m going to try to prove that it can actually be much
simpler.

If you already know how JWTs and session IDs work, [click here to skip to the guide](#how-to). The whole finished
project can be found at the end.

## Introduction to authentication techniques

After the user provides a matching username and password, you need to provide a way to identify the client. You would
traditionally do this by giving them a session ID, stored in a cookie in the user’s browser, which would be a random
string of text that’d be tracked on the server and associated with some information about the user. This can of course
be automated by your framework, like it is in PHP and ASP.NET. This however doesn’t scale well, because you have to keep
all of them in memory or save them to a database, which is a pain in the ass. You’d also have to use a database to save
session IDs in.

JWT is a modern replacement for session IDs. It’s basically a signed piece of JSON (with each entry called a “claim”)
with metadata and a hash attached to the end of it, ensuring that the data hasn’t been tampered with. This allows you to
store information like the expiration date, username, user’s roles and so on, while making sure the user can’t change
the token in any way.

If a JWT’s signature can be verified with the server’s key, that means it’s valid and the data stored in it can be
trusted. This saves you from having to keep track of session cookies on the server (and looking up data about the user),
while also allowing you to use the token between multiple servers. You can read more info
at [https://jwt.io/](https://jwt.io/). C# provides a very simple way to use this.


<div id="how-to" />

## How to

First, initialize an ASP.NET Web API .NET 6 project in your IDE (can be done by
running `dotnet new webapi -o &lt;project_name>` in the command line).

Then, delete WeatherForecast.cs and the Controllers folder, as we’ll be using
the [minimal API](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/minimal-apis) in ASP.NET.

The actual libraries we’ll use for JWTs is Microsoft.AspNetCore.Authentication.JwtBearer and
Microsoft.AspNetCore.Authorization, which can be installed either from your IDE or by running

```shell
dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer
dotnet add package Microsoft.AspNetCore.Authorization
```

### Adding JWT authentication

First, we’ll have to register JWT-bearer authentication, by adding this code above `var app = builder.Build();`

```cs
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(opt =>
{
    opt.TokenValidationParameters = new()
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("jwt signing key secret")),
        ValidateAudience = false,
        ValidateIssuer = false
    };
});
```

The code above will allow us to use JWTs for authentication throughout our application. Now we need a way to actually
create the tokens.

### Login endpoint

We’ll scroll under the `var app = builder.Build();`, where we’ll insert this code:

```cs
app.UseAuthentication();
app.UseAuthorization();
```

Now we can start making our own login endpoint. First, we’ll need a structure for transferring the login information. We
will do this by creating a folder called DTO and in it we’ll make a file called Login.cs. There we’ll place this code:

```cs
public record Login(string username);
```

Now go back to Program.cs, go back to where we left off and add this code:

```cs
app.MapPost("/login", ([FromBody] Login login) =>
{
    var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Secret"]));
    var authClaims = new List<Claim>
    {
        new("sub", login.Username),
        new(ClaimTypes.Role, "User")
    };
    var token = new JwtSecurityToken(
        signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256),
        expires: DateTime.Now.AddDays(14),
        claims: authClaims);
    return new JwtSecurityTokenHandler().WriteToken(token);
});
```

The code above defines an endpoint at /login, which when given a username will return a JWT token containing the
username, specifies that it expires in 14 days and that the user has the role “User”. There is absolutely no password
verification or user information loading right now, you can fill that in later.

### Adding support for tokens to Swagger

Swagger is the API explorer that shows up when you run the server. It doesn’t support setting JWTs by default, so we’ll
have to add that in. We’ll scroll up to `builder.Services.AddSwaggerGen();`, which we’ll replace with:

```cs
builder.Services.AddSwaggerGen(option =>
{
    option.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Description = "Please enter a valid token",
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        BearerFormat = "JWT",
        Scheme = "Bearer"
    });
    option.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            new string[] { }
        }
    });
});
```

We can now set the token from the web UI.

### Testing out authorization

Now we can finally define something for the user to interact with. Enter in this code:

```cs
app.MapGet("/test", [Authorize(Roles = "User")]() =>
{
    return "Hello World";
});
```

Now try it out. “Hello World” won’t be returned until you specify a JWT in the Swagger UI. This is all you need for now.

### Consuming it in a web application

The way you would use this in a web application is, by first obtaining the token after logging, storing it in localStore
and then on each subsequent web request setting it to the “authorization” field of the HTTP headers with a “Bearer “ at
the start. This however depends on the javascript libraries you use, which is beyond the scope of this tutorial.

### Next steps

Now that you have it working, the next steps would be to:

* Add password checking
* Move the signing key into appsettings.json
* Move the login code into its own service
* Start validating audiences and issuers (who issued and what client uses the token)
* Start checking and enforcing expiry dates

However, keep in mind that whatever claims you make bloat up the JWT body, which then ends up making every request from
the client bigger. The data stored in JWTs will also be visible by a potential attacker, so make sure you don’t store
passwords and such in claims.

This tutorial is by no means comprehensive, but it should be more than enough to nudge you in the right direction. All
the code from this project can be found
at [https://github.com/aeggydev/aspnet-jwt-auth-guide](https://github.com/aeggydev/aspnet-jwt-auth-guide).
