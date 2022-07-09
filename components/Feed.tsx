import styled from "styled-components"

export default function Feed() {
    return <Link href="/blog/rss.xml" target="_blank" title="RSS Feed">
        <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor"
             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-rss">
            <path d="M4 11a9 9 0 0 1 9 9"></path>
            <path d="M4 4a16 16 0 0 1 16 16"></path>
            <circle cx="5" cy="19" r="1"></circle>
        </Svg>
    </Link>
}

const Link = styled.a`
  &:hover {
    background: none;
  }
`
const Svg = styled.svg`
  height: 100%;
  width: 1.8rem;
  stroke: ${p => p.theme.textColor};
`
