import { LinkWrapper } from 'components/LinkWrapper'
import { NextSeo } from 'next-seo'
import { X } from 'phosphor-react'
import { Fragment } from 'react'
import * as Styled from './styles'
import { PageTemplateProps } from './types'

const PagesTemplate: React.FC<PageTemplateProps> = ({ heading, body }) => {
  return (
    <Fragment>
      <NextSeo
        title={`${heading} | Trips`}
        description={body}
        canonical='https://www.trips.manucoutinho.com'
        openGraph={{
          url: 'https://www.trips.manucoutinho.com',
          title: 'Trips',
          description: body,
          images: [
            {
              url: 'https://www.trips.manucoutinho.com/preview.png',
              width: 1280,
              height: 720,
              alt: 'mapa mundi'
            }
          ]
        }}
      />
      <Styled.Container>
        <LinkWrapper href='/' title='Home'>
          <X size={32} aria-label='Home' />
        </LinkWrapper>
        <Styled.Heading>{heading}</Styled.Heading>
        <Styled.Content>
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </Styled.Content>
      </Styled.Container>
    </Fragment>
  )
}

export default PagesTemplate
