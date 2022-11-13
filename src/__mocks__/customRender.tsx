import { render } from '@testing-library/react'
import { RenderOptions } from '@testing-library/react/types'
import { ReactElement, FC, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme/theme'

const MockProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: MockProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
