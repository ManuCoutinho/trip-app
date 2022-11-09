import { LinkWrapper } from 'components/LinkWrapper'
import Image from 'next/image'
import { X } from 'phosphor-react'
import { PlaceTemplateProps } from './types'
import * as Styled from './styles'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { NextSeo } from 'next-seo'

const PlaceTemplate: React.FC<PlaceTemplateProps> = ({ place }) => {
  const { isFallback } = useRouter()
  if (isFallback) return null

  return (
    <Fragment>
      <NextSeo
        title={`${place.name} | Trips`}
        description={place.description?.text}
        canonical=''
        openGraph={{
          url: '',
          title: `${place.name} | Trips`,
          description: place.description?.text,
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: place.name
            }
          ]
        }}
      />
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
    </Fragment>
  )
}
export default PlaceTemplate
