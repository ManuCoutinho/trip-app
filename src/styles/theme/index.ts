import { DefaultTheme, CustomTheme } from 'styled-components'
import dark from './dark'
import light from './light'

export type Theme = typeof defaultTheme

const defaultTheme = {
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
  }
} as const

function combineTheme(theme: CustomTheme): DefaultTheme {
  return { ...defaultTheme, ...theme }
}
export { combineTheme, dark, light }
