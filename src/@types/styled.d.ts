import 'styled-components'
declare module 'styled-components' {
  interface DefaultTheme {
    colors: {
      black: string
      text: string
      background: string
      primary: string
      secondary: string
      highlight: string
    }
    font: {
      text: string
      title: string
    }
    fontSize: {
      xsm: string
      sm: string
      md: string
      lg: string
      xl: string
      xlg: string
    }
    fontWeight: {
      light: number
      normal: number
      semibold: number
      bold: number
    }
    transition: string
    radius: {
      sm: string
      md: string
      lg: string
      full: string
    }
    spacing: {
      sm: string
      md: string
      lg: string
      container: string
    }
  }
}
