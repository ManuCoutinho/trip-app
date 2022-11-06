import { createContext, useState, FC } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { parseCookies, setCookie } from 'nookies'
import { combineTheme, light, dark } from 'styles/theme'
import { ThemeContextProviderProps, ThemeType } from './types'
import GlobalStyle from 'styles/global'

export const ThemeContext = createContext<ThemeType>({} as ThemeType)

export const ThemeContextProvider: FC<ThemeContextProviderProps> = ({
  children
}) => {
  const cookies = parseCookies()

  const userTheme = cookies.theme === 'light' ? light : dark

  const [theme, setTheme] = useState<DefaultTheme>(combineTheme(dark))

  function toggleTheme() {
    if (theme.title === 'dark') {
      setCookie(null, 'theme', 'light', {
        path: '/',
        maxAge: 30 * 24 * 60 * 60, //30days
        sameSite: true
      })
      return setTheme(combineTheme(light))
    }
    if (theme.title === 'light') {
      setCookie(null, 'theme', 'dark', {
        path: '/',
        maxAge: 30 * 24 * 60 * 60, //30days
        sameSite: true
      })
      return setTheme(combineTheme(dark))
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        {children}
        <GlobalStyle />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
