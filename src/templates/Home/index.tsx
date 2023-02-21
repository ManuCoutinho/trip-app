import { Fragment } from 'react'
import dynamic from 'next/dynamic'
import { Info } from 'phosphor-react'
import { NextSeo } from 'next-seo'
import { LinkWrapper } from 'components/LinkWrapper'
import { HomeTemplateProps } from './types'
import Loading from 'components/Loading'

const Map = dynamic(() => import('components/Map'), {
  ssr: false,
  loading: () => <Loading />
})

const HomeTemplate: React.FC<HomeTemplateProps> = ({ places }) => {
  return (
    <Fragment>
      <NextSeo
        title='Trips'
        description='Site para mostrar fotos incriveis dos lugares para os quais eu já viajei e/ou pretendo viajar ao redor do mundo'
        canonical={process.env.NEXT_PUBLIC_CANONICAL}
        openGraph={{
          url: process.env.NEXT_PUBLIC_CANONICAL,
          title: 'Trips',
          description:
            'Site para mostrar fotos incriveis dos lugares para os quais eu já viajei e/ou pretendo viajar ao redor do mundo',
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_CANONICAL}/preview.png`,
              width: 1200,
              height: 800,
              alt: 'Mapa mundial',
              type: 'image/png'
            }
          ]
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
