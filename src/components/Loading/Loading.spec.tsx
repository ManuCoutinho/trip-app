import { screen } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import Loading from '.'

describe('<Loading />', () => {
  it('should render the Loading wrapper correctly', () => {
    render(<Loading />)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })
  it('should match to snapshot', () => {
    const { container } = render(<Loading />)

    expect(container).toMatchSnapshot()
  })
})
