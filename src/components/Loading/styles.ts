import styled, { css, keyframes } from 'styled-components'

const dotAnimation = keyframes`
  0% {
  transform: scale(1) rotate(0);
  }
  50% {
  transform: scale(2) rotate(-180deg);
  }
  100% {
  transform: scale(1) rotate(-360deg) translateY(-10px);
  }
`
const dotUpAnimation = keyframes`
  0% {
  transform: scale(1) rotate(0);
  }
  50% {
  transform: scale(2) rotate(180deg);
  }
  100% {
  transform: scale(1) rotate(360deg) translateY(10px);
  }
`

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    background: ${theme.colors.background};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5rem;
  `}
`
export const Dot = styled.div<{ color: string; up?: boolean }>`
  ${({ color, up }) => css`
    width: 15px;
    height: 15px;
    background: ${color};
    border-radius: 50%;

    animation: ${up ? dotUpAnimation : dotAnimation} 2s ease-in 0.5s infinite
      forwards;
  `}
`
