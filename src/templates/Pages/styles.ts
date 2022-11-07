import styled, { css } from 'styled-components'

export const Container = styled.section`
  ${() => css`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    max-width: 1200px;
    margin: auto;
  `}
`
export const Heading = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.xlg};
    margin-bottom: 3rem;
  `}
`
export const Content = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.lg};
  `}
`
