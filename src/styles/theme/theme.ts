import { DefaultTheme } from 'styled-components'

export default {
  font: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  fontSize: {
    xsm: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xlg: '3rem'
  },
  fontWeight: {
    light: 100,
    normal: 400,
    semibold: 600,
    bold: 900
  },
  transition: 'all 0.2s ease-in-out',
  radius: {
    sm: '8px',
    md: '16px',
    lg: '25px',
    full: '50%'
  },
  spacing: {
    sm: '1.5rem',
    md: '3rem',
    lg: '5rem',
    container: '100rem'
  },
  colors: {
    black: '#090B09',
    text: '#e0e0e0',
    background: '#030518',
    primary: '#F88F00',
    secondary: '#6d6d6d',
    info: ' #6d5971',
    highlight: '#fc4949'
  }
} as DefaultTheme
