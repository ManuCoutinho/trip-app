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
        title='pais and title'
        description=''
        canonical=''
        openGraph={{
          url: '',
          title: '',
          description: '',
          images: [{ url: '', width: 1280, height: 720, alt: '' }]
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
