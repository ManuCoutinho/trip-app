import PlaceTemplate from 'templates/Place'
import { render } from '__mocks__/customRender'
import { renderHook, screen } from '@testing-library/react'
import placePropsMock, { placeWithOutHtml } from '__mocks__/data/placeMock'
import mockRouter from 'next-router-mock'
import { useRouter } from 'next/router'

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
  it('should return null when isFallback is equal true', async () => {
    const { result } = renderHook(() => useRouter())
    console.log(result.current.isFallback)
    const { getByText } = render(<PlaceTemplate {...placeWithOutHtml} />)
    screen.debug()
  })
  it('should match to snapshot', () => {
    const { container } = render(<PlaceTemplate {...placePropsMock} />)
    expect(container).toMatchSnapshot()
  })
})
