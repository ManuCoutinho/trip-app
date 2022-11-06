import type { NextPage } from 'next'
import { Fragment } from 'react'
import dynamic from 'next/dynamic'
import { Info } from 'phosphor-react'
import { LinkWrapper } from 'components/LinkWrapper'
import mapData from '__mocks__/mapData'

const Map = dynamic(() => import('components/Map'), {
  ssr: false
})

const Home: NextPage = () => {
  return (
    <Fragment>
      <LinkWrapper href='/about' title='About'>
        <Info size={32} aria-label='About' />
      </LinkWrapper>
      <Map places={mapData.places} />
    </Fragment>
  )
}

export default Home
