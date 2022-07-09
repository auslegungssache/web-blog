import { useRouter } from "next/router"
import styled from "styled-components"

export default function Breadcrumbs() {
    const router = useRouter()

    let secondBreadcrumb
    const value = router.pathname.split("/")[1]
    switch (value) {
        case "":
            secondBreadcrumb = "About"
            break
        default:
            secondBreadcrumb = value
    }

    return <BreadcrumbsS>
        <Tilde href="/">~</Tilde>
        {secondBreadcrumb
            ? <Breadcrumb href="/">{secondBreadcrumb}</Breadcrumb>
            : null
        }
    </BreadcrumbsS>
}

const BreadcrumbsS = styled.div`
  font-size: 2rem;
  font-weight: 500;
  color: ${p => p.theme.textColor};

  display: flex;
  gap: 0.5rem;
`
const Breadcrumb = styled.a`
  font-size: 1.55rem;
  font-weight: 500;
  color: ${p => p.theme.textColor};
  text-transform: capitalize;

  text-decoration: none;
  &:hover {
    text-decoration: underline;
    background: none;
  }

  &:last-of-type {
    &:after {
      display: none;
    }
  }

  &:after {
    display: inline-block;
    content: "/";
    margin-left: .5rem;
  }
`
const Tilde = styled(Breadcrumb)`
  &:hover {
    background: #913de6;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
