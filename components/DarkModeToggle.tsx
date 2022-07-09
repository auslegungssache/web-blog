import styled from "styled-components";
import useDarkMode from "use-dark-mode";

export default function DarkModeToggle() {
    function toggle() {
        darkMode.toggle()
    }
    const darkMode = useDarkMode()
    const flipped = darkMode.value ? "light" : "dark"

    return <Button onClick={toggle} title={`Set theme to ${flipped}`}>
        {!darkMode.value
            ? <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-moon"
            >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </Svg>
            : <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-sun"
            >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </Svg>
        }
    </Button>
}

const Button = styled.button`
  border-radius: 50%;
  border: 3px ${p => p.theme.textColor} solid;
  background-color: transparent;
  &:focus-within {
    border-color: #1e90ff;
    outline: none;
  }
  &:focus:not(:focus-visible) {
    border-color: ${p => p.theme.textColor};
  }

  cursor: pointer;

  max-height: 1rem;
  max-width: 1rem;
  padding: 1rem;

  display: grid;
  place-content: center;
`
const Svg = styled.svg`
  stroke: ${p => p.theme.textColor};
  stroke-width: 2px;
`
