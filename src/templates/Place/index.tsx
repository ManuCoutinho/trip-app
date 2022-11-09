import { LinkWrapper } from 'components/LinkWrapper'
import Image from 'next/image'
import { X } from 'phosphor-react'
import { PlaceTemplateProps } from './types'
import * as Styled from './styles'
import { useRouter } from 'next/router'

const PlaceTemplate: React.FC<PlaceTemplateProps> = ({ place }) => {
  const { isFallback } = useRouter()
  if (isFallback) return null

  return (
    <Styled.Container>
      <LinkWrapper href='/' title='Home'>
        <X size={32} aria-label='Home' />
      </LinkWrapper>
      <Styled.Wrapper>
        <Styled.Heading>{place?.name}</Styled.Heading>
        <Styled.Content
          dangerouslySetInnerHTML={{ __html: place?.description?.html || '' }}
        />
        <Styled.Gallery>
          {place?.gallery.map(({ url }) => (
            <Image
              key={`img-${place.id}-${url}`}
              src={url}
              alt={place?.name}
              width={1000}
              height={600}
              loading='lazy'
              quality={75}
            />
          ))}
        </Styled.Gallery>
      </Styled.Wrapper>
    </Styled.Container>
  )
}
export default PlaceTemplate
