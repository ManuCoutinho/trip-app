import { Fragment } from 'react'
import dynamic from 'next/dynamic'
import { Info } from 'phosphor-react'
import { NextSeo } from 'next-seo'
import { LinkWrapper } from 'components/LinkWrapper'
import { HomeTemplateProps } from './types'

const Map = dynamic(() => import('components/Map'), {
  ssr: false
})

const HomeTemplate: React.FC<HomeTemplateProps> = ({ places }) => {
  return (
    <Fragment>
      <NextSeo
        title=''
        description=''
        canonical=''
        openGraph={{
          url: '',
          title: '',
          description: '',
          images: [{ url: '', width: 1280, height: 720, alt: '' }],
          siteName: ''
        }}
      />
      <LinkWrapper href='/about' title='About'>
        <Info size={32} aria-label='About' />
      </LinkWrapper>
      <Map places={places} />
    </Fragment>
  )
}

export default HomeTemplate
