/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { screen, waitFor } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import Places from 'pages/place/[slug]'
import placeMock from '__mocks__/data/placeMock'

jest.mock('next/router', () => require('next-router-mock'))

describe('<Places />', () => {
  it('should render the Pages page correctly', async () => {
    render(<Places {...placeMock} />)

    await waitFor(() => {
      expect(
        screen.getByRole('heading', { name: placeMock.place.name })
      ).toBeInTheDocument()
      expect(
        screen.getByText(placeMock.place.description!.html)
      ).toBeInTheDocument()
    })
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /link to excursionista/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: placeMock.place.name })
    ).toBeInTheDocument()
  })
})
