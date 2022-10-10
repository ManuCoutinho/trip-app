import { ThemeContextProvider } from './ThemeContext'
import { ThemeContextProviderProps } from './ThemeContext/types'

const GlobalContext: React.FC<ThemeContextProviderProps> = ({ children }) => {
  return <ThemeContextProvider>{children}</ThemeContextProvider>
}

export default GlobalContext
