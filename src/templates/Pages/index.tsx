import { LinkWrapper } from 'components/LinkWrapper'
import { X } from 'phosphor-react'
import * as Styled from './styles'
import { PageTemplateProps } from './types'

const PagesTemplate: React.FC<PageTemplateProps> = ({ heading, body }) => {
  return (
    <Styled.Container>
      <LinkWrapper href='/' title='Home'>
        <X size={32} aria-label='Home' />
      </LinkWrapper>
      <Styled.Heading>{heading}</Styled.Heading>
      <Styled.Content>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </Styled.Content>
    </Styled.Container>
  )
}

export default PagesTemplate
