import Header from "./Header";
import Footer from "./Footer";
import styled, {createGlobalStyle} from "styled-components";
import { useRouter } from "next/router";
import Head from "next/head"

interface Props {}

export default function Layout({children}: React.PropsWithChildren<Props>) {
    const router = useRouter()

    // Dependency needed to subscribe to url changes
    function makeTitle(): string {
        let title: string
        if (router.pathname === "/") {
            title = "~"
        } else {
            let split = router.pathname
                .split("/")
                .reverse()
                .filter(x => x.length > 0)
                .concat(["~"])
            title = split.join(" / ").trim()
        }

        return title
    }
    const title = makeTitle()

    return <div className="content">
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                rel="stylesheet" />
            <title>{title}</title>
            <meta name="theme-color" content="#913de6" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="icon" href="/favicon.svg" />
            <link rel="apple-touch-icon" href="/icon-192.png" />
            <link rel="stylesheet" href="/index.css" />
        </Head>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
        <Footer />
    </div>
}

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: 'Fira Sans', sans-serif;
    padding: 0 0 0 0;
    margin: 0;
    min-height: 100vh;
  }

  body {
    overflow-y: scroll;
  }

  * {
    transition: background .15s ease-in-out;
  }

  main {
    overflow-x: hidden;
  }

  ::selection {
    background: ${p => p.theme.selectionBackground};
    color: ${p => p.theme.selectionColor};
  }

  .content {
    grid-column: 2;

    display: grid;
    grid-template-rows: auto 1fr auto;

    min-height: 100vh;
    padding: 0;

    background: ${p => p.theme.background};
    color: ${p => p.theme.textColor};

    > :first-child {
      padding-top: 1.5rem;
    }

    > :last-child {
      padding-bottom: 1.5rem;
    }

    > * {
      padding: 0.75rem 1.25rem;
      @media (min-width: 768px) {
        padding: 0.75rem 22.5vw;
      }
    }
  }
`
