import PlaceTemplate from 'templates/Place'
import { render } from '__mocks__/customRender'
import placePropsMock from '__mocks__/data/placeMock'
jest.mock('next/router', () => require('next-router-mock'))

describe('<PlaceTemplate />', () => {
  it('should render the Place template correctly', () => {
    const { getByRole, getByTestId, getByText } = render(
      <PlaceTemplate {...placePropsMock} />
    )
    expect(getByTestId('back-link')).toBeInTheDocument()
    expect(getByRole('link', { name: /excursionista/i })).toBeInTheDocument()
    expect(getByText(/curtiu/i)).toBeInTheDocument()
  })

  it('should match to snapshot', () => {
    const { container } = render(<PlaceTemplate {...placePropsMock} />)
    expect(container).toMatchSnapshot()
  })
})
