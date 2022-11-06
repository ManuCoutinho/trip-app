import { screen } from '@testing-library/react'
import { render } from '../../__mocks__/customRender'
import { LinkWrapper } from '.'

const linkProps = {
  children: 'children',
  href: 'about',
  title: 'about'
}
describe('<LinkWrapper/>', () => {
  it('should render a link and children correctly ', () => {
    render(<LinkWrapper {...linkProps} />)
    const link = screen.getByRole('link', { name: /about/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/about')
    expect(link.firstChild).toHaveTextContent(linkProps.children)
  })
  it('should match to snapshot ', () => {
    const { container } = render(<LinkWrapper {...linkProps} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
