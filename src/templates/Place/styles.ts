import styled, { css, keyframes } from 'styled-components'

export const Container = styled.section`
  ${({ theme }) => css`
    max-width: ${theme.spacing.container};
    margin: 0 auto;
    padding: ${theme.spacing.md};
  `}
`
export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    gap: ${theme.spacing.md};
  `}
`
export const Heading = styled.h1`
  ${({ theme }) => css`
    padding: 0.5rem;
    font-size: ${theme.fontSize.xlg};
    font-weight: ${theme.fontWeight.bold};
    line-height: 4rem;
    color: ${theme.colors.primary};
    margin: ${theme.spacing.lg} 0;
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    line-height: 2.5rem;
    line-break: normal;
    white-space: pre-line;
    transition: ${theme.transition};
    & p {
      margin-bottom: 1rem;
    }

    & a:hover {
      color: ${theme.colors.highlight};
      transition: ${theme.transition};
    }
  `}
`
export const Gallery = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    align-items: center;
    grid-gap: ${theme.spacing.lg};
    overflow: hidden;
    & img {
      width: 100%;
      height: 100%;
      border-radius: ${theme.radius.sm};
      object-fit: cover;
      background: rgba(13, 14, 40, 0.8);
      background-image: linear-gradient(
        to right,
        rgba(3, 4, 24, 0.1) 0%,
        rgba(3, 4, 24, 0.2) 20%,
        rgba(3, 4, 24, 0.4) 40%,
        rgba(3, 4, 24, 0.6) 60%
      );
      background-size: 60rem 14rem;
      animation: ${placeholderShimmer} 1.5s linear infinite forwards;
    }
  `}
`
const placeholderShimmer = keyframes`
  0%{
    background-position: -40rem 0
  }
  100%{
    background-position: 40rem 0
  }
`
