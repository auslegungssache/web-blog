import styled from "styled-components"

export default function Footer() {
    return <FooterS>
        <span>Made in Brno, <Icon src="/czech.png" alt="Czech flag" title="Czech flag" className="icon" /></span>
    </FooterS>
}

const FooterS = styled.footer`
  text-align: center;
  row-gap: 0.2rem;

  background: ${p => p.theme.secondaryBackground};
  color: ${p => p.theme.textColor};
`
const Icon = styled.img`
  height: 1.5ex;
  padding: 0 .3em;
  object-position: center;
`
