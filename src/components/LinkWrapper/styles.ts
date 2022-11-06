import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    z-index: 1100; //bigger than leaflet
    top: 3rem;
    right: 3rem;
    color: ${theme.colors.white};
    transition: ${theme.transition};
    &:hover {
      color: ${theme.colors.highlight};
      transition: ${theme.transition};
    }
  `}
`
