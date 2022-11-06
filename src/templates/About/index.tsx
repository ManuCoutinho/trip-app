import { LinkWrapper } from 'components/LinkWrapper'
import { X } from 'phosphor-react'
import * as Styled from './styles'

const AboutTemplate: React.FC = () => {
  return (
    <Styled.Container>
      <LinkWrapper href='/' title='Home'>
        <X size={32} aria-label='Home' />
      </LinkWrapper>
      <Styled.Heading>Title Page</Styled.Heading>
      <Styled.Content>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium,
        qui. Quasi, quas dolor. Pariatur, fugiat hic! Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Praesentium, qui. Quasi, quas dolor.
        Pariatur, fugiat hic!
      </Styled.Content>
    </Styled.Container>
  )
}

export default AboutTemplate
