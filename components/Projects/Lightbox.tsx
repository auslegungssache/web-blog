import styled from "styled-components"

interface ILightImg {
    src: string
    alt?: string
    id: string
    parentId: string
}

export function LightImg(props: ILightImg) {
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
