import Link from 'next/link'
import * as Styled from './styles'
import { LinkWrapperProps } from './types'

export const LinkWrapper: React.FC<LinkWrapperProps> = ({
  children,
  href,
  title
}) => {
  return (
    <Styled.Wrapper>
      <Link href={href} title={`link to ${title}`}>
        {children}
      </Link>
    </Styled.Wrapper>
  )
}
