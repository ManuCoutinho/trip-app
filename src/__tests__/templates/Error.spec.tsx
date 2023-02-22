import { render } from '__mocks__/customRender'
import { fireEvent, renderHook } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import { act } from 'react-dom/test-utils'
import ErrorTemplate from 'templates/Error'
import { useRouter } from 'next/router'

jest.mock('next/router', () => require('next-router-mock'))
const templatePropsMock = {
  statusCode: 500
}
describe('<ErrorTemplate />', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/about')
  })
  it('should render the Error template correctly', () => {
    const { getByRole, getByText } = render(
      <ErrorTemplate {...templatePropsMock} />
    )
    expect(getByRole('img', { name: /error/i })).toBeInTheDocument()
    expect(getByText('Thanks for the patience!')).toBeInTheDocument()
    expect(
      getByText(`Error ${templatePropsMock.statusCode}`)
    ).toBeInTheDocument()
  })
  it('should navigate to home page when click in button', () => {
    const { result } = renderHook(() => useRouter())
    const { getByRole } = render(<ErrorTemplate {...templatePropsMock} />)
    const button = getByRole('button', { name: /home/i })
    act(() => {
      fireEvent.click(button)
    })
    expect(result.current.pathname).toBe('/')
  })
  it('should omit status code in the document', () => {
    const { queryByText } = render(<ErrorTemplate statusCode={null} />)

    expect(
      queryByText(`Error ${templatePropsMock.statusCode}`)
    ).not.toBeInTheDocument()
  })
  it('should match to snapshot', () => {
    const { container } = render(<ErrorTemplate {...templatePropsMock} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
