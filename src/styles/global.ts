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

  /* nprogress style overwriting*/
    #nprogress {
      pointer-events: none;
    }
    #nprogress .bar {
      background: ${({ theme }) => theme.colors.highlight};
      position: fixed;
      z-index: 1500;
      top: 0;
      left: 0;
      width: 100%;
      height: 0.25rem;
    }
    /* Fancy blur effect */
    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px #F88F00,
        0 0 5px #F88F00;
      opacity: 1;
      -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
      transform: rotate(3deg) translate(0px, -4px);
    }
    /* Remove these to get rid of the spinner */
    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }
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
