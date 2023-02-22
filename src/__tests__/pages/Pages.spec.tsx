import { screen, waitFor } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import Pages from 'pages/[slug]/index'

jest.mock('next/router', () => require('next-router-mock'))

const mockProps = {
  heading: 'page-test',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
}
describe('<Pages />', () => {
  it('should render the Pages page correctly', async () => {
    render(<Pages {...mockProps} />)

    await waitFor(() => {
      expect(
        screen.getByRole('heading', { name: mockProps.heading })
      ).toBeInTheDocument()
      expect(screen.getByText(mockProps.body)).toBeInTheDocument()
    })
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
  })
})
