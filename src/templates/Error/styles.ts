import styled, { css } from 'styled-components'

export const Container = styled.section`
  ${() => css`
    width: 100vw;
    height: 100vh;
    display: grid;
    place-content: center;
    gap: 2rem;
  `}
`
export const Box = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-flow: column wrap;
    gap: 1rem;
  `}
`
export const Wrapper = styled.div`
  ${() => css`
    display: flex;

    align-items: center;
    justify-content: center;
    width: 100%;
  `}
`
export const Text = styled.p`
  ${() => css``}
`
export const Button = styled.button`
  ${({ theme }) => css`
    border: 0;
    padding: 1rem 3rem;
    border-radius: ${theme.radius.md};
    margin-top: 0.5rem;
    background: ${theme.colors.info};
    transition: ${theme.transition};

    &:hover {
      background: ${theme.colors.highlight};
      transition: ${theme.transition};
    }
  `}
`
export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.xl};
  `}
`
