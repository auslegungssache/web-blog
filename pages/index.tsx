import type { NextPage } from 'next'
import styled, {createGlobalStyle} from 'styled-components'

const Home: NextPage = () => {
    return (
        <div>
            <GlobalStyle />
            <h1>About</h1>
            <P>
                I'm a developer from Brno, Czech Republic<Icon className="icon emacs" src="/czech.png" alt="Czech flags" /> who
                likes to <a href="/blog">blog</a> about my experiences with software, primarily <b>web development</b>
                , <b>.NET</b>, <b>Lisp</b> and <b>functional programming</b>.
            </P>
            <P>
                Started with programming in middle school and have always tried to learn as much as possible. I'm a big fan of
                open source and GPL software and <a href="https://github.com/aeggydev" target="_blank">
                publish my projects as open source</a>.
                You can see some of them <a href="/projects">here</a>.
            </P>
            <P>
                My favorite editor is Emacs
                <Icon className="icon" src="/emacs.svg" alt="Emacs icon" /> with <a href="https://github.com/emacs-evil/evil"
                                                                                    target="_blank">the good parts of Vim</a>.
                You can read my config <a href="https://github.com/aeggydev/emacs-config" target="_blank">here</a>.
            </P>
        </div>
    )
}

const P = styled.p`
  line-height: 1.5;
  font-size: 1.05rem;
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`
const Icon = styled.img`
  height: 1.5ex;
  padding: 0 .3em;
  object-position: center;
`
const GlobalStyle = createGlobalStyle`
    a {
      color: ${p => p.theme.linkColor};
      text-decoration-thickness: 2.5px;
      
      &:hover {
        background: ${p => p.theme.linkColor};
        color: ${p => p.theme.linkHoverColor};
      }
    }
`

export default Home
