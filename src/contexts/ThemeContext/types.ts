import { DefaultTheme } from 'styled-components'

export interface ThemeType {
  theme: DefaultTheme
  toggleTheme: () => void
}

export interface ThemeContextProviderProps {
  children: React.ReactNode
}
