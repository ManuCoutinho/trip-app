import { render } from '__mocks__/customRender'
import PagesTemplate from 'templates/Pages'

const templatePropsMock = {
  heading: 'Heading Template test',
  body: 'Body template test mock'
}
describe('<PagesTemplate />', () => {
  it('should render the Pages template correctly', () => {
    const { getByRole, getByText } = render(
      <PagesTemplate {...templatePropsMock} />
    )
    const backLink = getByRole('link', { name: /link to home/i })
    const body = getByText(templatePropsMock.body)
    const heading = getByText(templatePropsMock.heading)
    expect(backLink).toBeInTheDocument()
    expect(body).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
  })
  it('should match to snapshot', () => {
    const { container } = render(<PagesTemplate {...templatePropsMock} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
