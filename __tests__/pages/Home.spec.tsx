import { screen, render } from '@testing-library/react'

import Home from 'pages/index'

describe('<Home/>', () => {
  it('should render a Home page correctly', () => {
    const { container } = render(<Home />)
    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
