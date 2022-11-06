import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*, ::after, ::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 67.5%;
 @media (max-width: 67.5em){
   font-size: 60%;
 }
 @media (max-width: 50em){
   font-size: 52.5%;
 }
  
 @media (max-width: 27em) {
  html {
    font-size: 47.5%;
  }
}
}
body, html, #__next {
  scroll-behavior: smooth;
  height: 100%; 
}
body {
  ${({ theme }) => css`
    background: ${theme.colors.background};
    color: ${theme.colors.white};
    transition: ${theme.transition};
  `}
}

body, input, textarea, button {
 font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 font-size: 16px;
}

p {
${({ theme }) => css`
  font-size: ${theme.fontSize.lg};
`}
}
h1, h2, h3, h4, h5, h6, strong {
 ${({ theme }) => css`
   font-weight: ${theme.fontWeight.bold};
   font-family: ${theme.font.title};
 `}
}

a {
 text-decoration: none;
 color: inherit;
 cursor: pointer;  
}

button,
label {
  cursor: pointer;
}

sup,
sub {
  font-size: 50%;
}
img,
iframe,
object,
embed,
video {
  max-width: 100%;
}
iframe[width][height],
object[width][height],
embed[width][height],
video[width][height] {
  height: auto; /* Preserve aspect ratio */
}
img[width],
iframe[width],
object[width],
embed[width],
video[width] {
  width: auto; /* Defer to max-width */
}
:focus:not(:focus-visible) {
  outline: 0;
}
`
export default GlobalStyle
