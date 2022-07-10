import styled, {createGlobalStyle} from "styled-components"

export default function Projects() {
    return <div className="projects">
        <PreviewStyle />
        <LinksStyle />

        <h1 style={{textAlign: "center"}}>Projects</h1>
        <Demos>
            <ProjectListing title="School entrance exam manager"
                            id="exam"
                            bubbles={[
                                ['Fullstack webapp', '#18AC00'], ['JS & TypeScript', '#CDB70E'], ['React', '#61DAFB'],
                                ['C# & ASP.NET', '#3A008C'], ['GraphQL', '#E632AC'], ['Redux', '#764ABC'], ['JWT', '#D63AFF']
                            ]}
                            links={<>
                                <A href="https://github.com/aeggydev/purkynova-prijimacky-frontend"
                                   bg="#00BD0D">
                                    Frontend
                                </A>
                                <A href="https://github.com/aeggydev/purkynova-prijimacky-backend"
                                   bg="#0061BD">
                                    Backend
                                </A>
                            </>}
                            preview={<>
                                <LightImg src="/project_images/exam_user.png" id="exam_user" parentId="exam" />
                                <LightImg src="/project_images/exam_admin.png" id="exam_admin" parentId="exam" />
                            </>}>
                Tool that I made for my school. It allows potential participants to sign up for a pre-exam through
                the
                web interface.<br /><br />
                Organizators can log in and manage the participants through a table. Information in the table can be
                updated and participants are informed of updates by email. Everything happens without reloads.<br /><br />
                <i style={{fontWeight: 300}}>Note: The website is in Czech.</i>
            </ProjectListing>
            <ProjectListing title="OEM Info Tool"
                            id="oem"
                            bubbles={[
                                ['Platform: Windows', '#18AC00'], ['C#', '#3A008C'],
                                ['WPF', '#C69A00'], ['MVVM', '#C64700']
                            ]}
                            links={<>
                                <A href="https://github.com/aeggydev/oem-info-manager"
                                   bg="#D68D37">
                                    Source
                                </A>
                                <A href="https://github.com/aeggydev/oem-info-manager/releases/download/v1.0.0/oem-logo.zip"
                                   bg="#00B934">
                                    Download
                                </A>
                            </>}
                            preview={<>
                                <LightImg src="/project_images/oem_tool.png" id="oem_screenshot" parentId="oem" />
                            </>}>
                Tool for changing OEM information. Edits the registry information in Windows.<br /><br />
                Allows exporting info into a file and restoring it on another computer. Supports many image formats.
                Has buttons for opening relevant registry panes and viewing changes in system info.<br/><br/>
                <i>Written in C#, using the WPF UI framework. I made this project to try making XAML Windows
                    applications.</i>
            </ProjectListing>
            <ProjectListing title="tilde.cz"
                            id="tilde"
                            bubbles={[
                                ['Static website', '#18AC00'], ['Svelte', '#FF3E00'],
                                ['JS & TS', '#CDB70E'], ['CSS & Sass', '#2449D8']]}
                            links={<>
                                <A href="https://github.com/aeggydev/web-blog"
                                   bg="#D68D37">
                                    Source
                                </A>
                                <A href="/"
                                   bg="#00B934">
                                    Visit
                                </A>
                            </>}
                            preview={<>
                                <LightImg src="/project_images/tilde.png" id="tilde_about" parentId="tilde" />
                            </>}>
                My personal website and blog, <b>coincidentally also this website</b>. It’s my first project in
                Svelte,
                which I find to be amazing framework. I put articles and
                my projects on the website, although I’d like to eventually also put up useful tools and snippets.
                I try to make my site as modern as possible, while keeping it simple, with features like automatic
                dark mode, RSS, CSS Grid and responsive layouts.<br/><br/>

                The site is hosted on Cloudflare Pages and generates articles from .md files. I plan on eventually
                switching this over to .org files and making it all a bit more dynamic.
            </ProjectListing>
            <ProjectListing title="Fitness site"
                            id="fitness"
                            bubbles={[
                                ['Static website', '#18AC00'], ['JS & TypeScript', '#CDB70E'],
                                ['Tailwind', '#16BECB'], ['React', '#61DBFB'],
                                ['NextJS', '#000000']]}
                            links={<>
                                <A href="https://github.com/aeggydev/lbs-system"
                                   bg="#D68D37">
                                    Source
                                </A>
                            </>}
                            preview={<>
                                <LightImg src="/project_images/fitness_site.png" id="fitness_screenshot" parentId="fitness" />
                            </>}>
                I once worked for a client on a fitness service website, but they sadly gave up on the project
                halfway
                through. It was one of the first serious projects I ever worked on.<br/><br />

                <i style={{fontWeight: 300}}>Note: Images and video blurred for privacy reasons.</i>
            </ProjectListing>
            <ProjectListing title="Countdown app"
                            id="countdown"
                            bubbles={[
                                ['Platform: Windows', '#18AC00'], ['C#', '#3A008C'],
                                ['WPF', '#C69A00'], ['MVVM', '#C64700']]}
                            links={<>
                                <A href="https://github.com/aeggydev/countdown-wpf"
                                   bg="#D68D37">
                                    Source
                                </A>
                                <A href="https://github.com/aeggydev/countdown-wpf/releases/download/v1.0.0/countdown.zip"
                                   bg="#00B934">
                                    Download
                                </A>
                            </>}
                            preview={<>
                                <LightImg src="/project_images/countdown.png" id="countdown_screenshot" parentId="countdown" />
                            </>}>
                Simple app I made to find out, how easy the .NET framework makes it to create such a simple app as a
                countdown app and also to practice MVVM.
            </ProjectListing>
            <ProjectListing title="My literate Emacs config"
                            bubbles={[['GNU Emacs', '#C64E3B'], ['emacs-lisp', '#5E5BA8'], ['org-mode', '#78AB9A']]}
                            links={<>
                                <A href="https://github.com/aeggydev/emacs-config"
                                   bg="#D68D37">Source</A>
                            </>}>
                Emacs is my favorite piece of software. It’s a text editor, but also an operating system. It can be
                infinitely tweaked and changed from within at runtime.
                My goal is to eventually move almost everything I do into it. But I first have to start with my
                development work, which is the hardest.<br /><br />

                The config is written in a declarative way and is written in an .org document, from which the code
                snippets are taken on load-time and ran. I plan to document it more and make it less hierarchical,
                eventually publish it into a website.
            </ProjectListing>
            <ProjectListing title="Deezer tool"
                            bubbles={[['Linux CLI', '#EAB310'], ['C# library', '#3A008C']]}
                            links={<>
                                <A href="https://github.com/aeggydev/deezer-tool"
                                   bg="#D68D37">Source</A>
                            </>}>
                Simple CLI tool and C# library that allows you to download music from deezer.com. You just input
                your personal token and then you can download any song, album, artist you like as MP3 with metadata.
                <br /><br />
                I made this project to practice my reverse-engineering skills and also to learn how to properly use
                APIs of others.<br />
                I can’t guarantee that the project works anymore and I honestly don’t care, as I have no need for it
                anymore.
            </ProjectListing>
            <ProjectListing title="MPV player extension"
                            bubbles={[['Chrome extension', '#18AC00'], ['Go CLI', '#73CDDD']]}
                            links={<>
                                <A href="https://github.com/aeggydev/web-mpv"
                                   bg="#D68D37">Source</A>
                            </>}>
                Extremely simple Chrome extension with a Go server, which allows you to play a Youtube video in the
                MPV
                player, which makes playing videos on old laptops much more fluid.<br/><br/>

                It’s written to be extendable and support many actions, but I haven’t gotten around to adding those
                to the extension.
            </ProjectListing>
            <ProjectListing title="Twitter JFIF Renamer"
                            bubbles={[['Chrome extension', '#18AC00'], ['JS & TypeScript', '#CDB70E']]}
                            links={<>
                                <A href="https://github.com/aeggydev/jfif-renamer-twitter"
                                   bg="#D68D37">Source</A>
                                <A href="https://chrome.google.com/webstore/detail/twitter-jfif-renamer/hamcegffnbpeabloimdghellacajgikl"
                                   bg="#00B934">Download</A>
                            </>}>
                Simple Chrome extension that renames all downloaded .JFIF files (format Twitter stores images in)
                into .JPG, so that they can be used properly.
            </ProjectListing>
            <ProjectListing title="Lisp interpreter"
                            bubbles={[['C#', '#3A008C'], ['Lisp', '#000'], ['Language development', '#1D63CC']]}
                            links={<>
                                <A href="https://github.com/aeggydev/Listopad"
                                   bg="#D68D37">Source</A>
                            </>}>
                My attempt to make my own toy Lisp dialect. It doesn't do much but I'm constantly working on it.
            </ProjectListing>
        </Demos>
    </div>
}

interface ILightImg {
    src: string
    alt?: string
    id: string
    parentId: string
}
function LightImg(props: ILightImg) {
    return <>
        <a href={`#${props.id}`}>
            <img src={props.src} alt={props.alt} />
        </a>

        <Lightbox href={`#${props.parentId}`} id={props.id}>
            <img src={props.src} alt={props.alt} />
        </Lightbox>
    </>
}
const Lightbox = styled.a`
  display: none;

  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  padding: 2rem;
  background: rgba(0, 0, 0, .8);

  &:target {
    display: grid;
    place-content: center;
  }

  img {
    display: inline-block;
    min-height: 50vh;
  }
`

interface IA {
    href: string
    bg: string
}
function A(props: React.PropsWithChildren<IA>) {
    return <a href={props.href} style={{background: props.bg}} target="_blank">{props.children}</a>
}

interface IProjectListing {
    title: string
    bubbles: [string, string][]
    id?: string

    preview?: React.ReactNode[] | React.ReactNode
    links?: React.ReactNode[] | React.ReactNode
}
function ProjectListing(props: React.PropsWithChildren<IProjectListing>) {
    return <Listing className="listing" hasPreview={!!props.preview} id={props.id}>
        {/* if preview */}
        <div className="preview">
            {props.preview}
        </div>
        <Info>
            <Title>{props.title}</Title>
            <Bubbles>
                {props.bubbles.map(x => <Bubble style={{background: x[1]}}>{x[0]}</Bubble>)}
            </Bubbles>
            <Description>
                {props.children}
            </Description>
            <LinksBox>
                <svg width="19" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3333 18.3334V15.1084C13.3646 14.711 13.3109 14.3115 13.1758 13.9365C13.0408 13.5615 12.8274 13.2195 12.55 12.9334C15.1667 12.6417 17.9167 11.65 17.9167 7.10003C17.9164 5.93655 17.4689 4.81769 16.6667 3.97503C17.0465 2.95712 17.0197 1.83199 16.5917 0.833363C16.5917 0.833363 15.6083 0.541696 13.3333 2.0667C11.4233 1.54905 9.40998 1.54905 7.49999 2.0667C5.22499 0.541696 4.24166 0.833363 4.24166 0.833363C3.81364 1.83199 3.78678 2.95712 4.16666 3.97503C3.35843 4.82395 2.91043 5.95291 2.91666 7.12503C2.91666 11.6417 5.66666 12.6334 8.28332 12.9584C8.00915 13.2417 7.79771 13.5795 7.66275 13.95C7.52778 14.3204 7.47233 14.7151 7.49999 15.1084V18.3334M7.49999 15.8334C3.33332 17.0834 3.33332 13.75 1.66666 13.3334L7.49999 15.8334Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className="links">{props.links}</div>
            </LinksBox>
        </Info>
    </Listing>
}
const Title = styled.div`
  font-size: 1.25rem;
  margin: 0;
  font-weight: 500;
  color: ${p => p.theme.accentTextColor};
`
const LinksBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  margin-top: auto;

  gap: 0.625rem;
  padding: 0 0.625rem;
  height: 2rem;

  > svg {
    align-self: center;
    height: 100%;
    width: 1.5rem;

    > path {
      stroke: ${p => p.theme.textColor};
    }
`
const LinksStyle = createGlobalStyle`
  .links {
    display: flex;
    gap: inherit;

    > * {
      border-radius: 3px;
      text-decoration: none;
      color: white;

      display: grid;
      place-content: center;
      padding: 1rem;
    }
  }
`
const PreviewStyle = createGlobalStyle`
  .preview {
    display: grid;
    place-content: center;
    gap: 1rem;
    @media (min-width: 768px) {
      max-width: 50%;
    }

    img {
      object-fit: scale-down;
      max-height: 50vh;
      max-width: 80vw;
      @media (min-width: 768px) {
        max-width: 100%;
        max-height: fit-content;
      }
    }

    iframe {
      height: 100%;
      border: solid white 1px;
    }
  }
`

interface IListing {
    hasPreview: boolean
}
const Listing = styled.div<IListing>`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  align-items: stretch;
  padding: 1rem;
  gap: 0.625rem;

  scroll-margin-top: 1.5rem;

  border: 1px solid #474747;
  border-radius: 3px;

  ${p => p.hasPreview ? `{
    @media (min-width: 768px) {
      grid-column: span 2;
    }
  }` : ""}
`
const Description = styled.div`
  white-space: pre-line;
  line-height: 145%;
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.625rem;
  gap: 0.3rem;
`
const Bubbles = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  gap: 0.4rem;
  padding: 0 0.4rem;

  color: white;
  font-size: 1.1rem;
`
const Bubble = styled.div`
  display: grid;
  padding: 1px 0.5rem;
  place-content: center;
  border-radius: 0.5rem;
  white-space: nowrap;
`

const Demos = styled.div`
  display: grid;
  place-items: stretch;

  grid-template-columns: 1fr;
  grid-gap: 0.5rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  .bubble {
    padding: 0.3rem 0.7rem;
    border-radius: 0.8rem;
    color: white;
  }

  .info {
    line-height: 2;
  }
`
