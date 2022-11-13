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
    margin-bottom: 5rem;
  `}
`
export const Content = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.lg};
    line-height: 2.8rem;
    text-align: left;
    margin-bottom: 1rem;

    a {
      color: ${theme.colors.primary};
      transition: color ease-in-out 0.3s;
      &:hover {
        transition: color ease-in-out 0.2s;
        color: ${theme.colors.highlight};
        text-decoration: underline;
      }
    }
  `}
`
