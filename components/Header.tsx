import { useRouter } from "next/router"
import React, {CSSProperties} from "react"
import Feed from "./Feed";
import Breadcrumbs from "./Breadcrumbs";
import DarkModeToggle from "./DarkModeToggle";
import styled from "styled-components";

export default function Header() {
    const router = useRouter()

    function isPathname(path: string) {
        return router.pathname === path
    }

    const style: CSSProperties = {textDecoration: "underline"}
    const makeStyle = (path: string) => isPathname(path) ? style : {}

    return <Home>
        <Top>
            <Breadcrumbs />
            <TopLinks>
                {/* <Feed /> */}
                <DarkModeToggle />
            </TopLinks>
        </Top>
        <Bottom>
            <Link href="/blog" style={makeStyle("/blog")}>Blog</Link>
            <Link href="/projects" style={makeStyle("/projects")}>Projects</Link>
            <Link href="/" style={makeStyle("/")}>About</Link>
            <Link href="https://github.com/aeggydev" target="_blank">Github</Link>
        </Bottom>
    </Home>
}

const Home = styled.div`
  display: grid;
  grid-template-rows: 3fr 2fr;
  grid-gap: .5rem;
  background: ${p => p.theme.secondaryBackground};
`
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const TopLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 0.75rem;
`
const Bottom = styled.div`
  display: flex;
  justify-content: end;
  gap: 0.5rem;
  font-weight: 500;
`
const Link = styled.a`
  font-size: 1.1rem;
  color: ${p => p.theme.accentTextColor};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    background: none;
    color: ${p => p.theme.accentTextColor};
  }
`
