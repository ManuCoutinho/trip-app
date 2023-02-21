import { useTheme } from 'styled-components'
import * as Styled from './styles'

const Loading: React.FC = () => {
  const { colors } = useTheme()
  return (
    <Styled.Wrapper
      data-testid='loading'
      role='status'
      aria-live='polite'
      aria-atomic={true}
      aria-labelledby='loading'
    >
      <Styled.Dot color={colors.highlight} up />
      <Styled.Dot color={colors.secondary} />
      <Styled.Dot color={colors.highlight} up />
      <Styled.Dot color={colors.secondary} />
      <Styled.Dot color={colors.highlight} up />
    </Styled.Wrapper>
  )
}

export default Loading
