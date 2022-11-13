import { DefaultTheme } from 'styled-components'

export default {
  font: {
    text: 'sans-serif',
    title: 'sans-serif'
  },
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
    bold: 700
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
    text: '#d6d6d6',
    background: '#030518',
    primary: '#F88F00',
    secondary: '#475569',
    highlight: '#fc4949'
  }
} as DefaultTheme
