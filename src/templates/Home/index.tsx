import dynamic from 'next/dynamic'
import { Info } from 'phosphor-react'
import { LinkWrapper } from 'components/LinkWrapper'
import { HomeTemplateProps } from './types'

import { Fragment } from 'react'

const Map = dynamic(() => import('components/Map'), {
  ssr: false
})

const HomeTemplate: React.FC<HomeTemplateProps> = ({ places }) => {
  return (
    <Fragment>
      <LinkWrapper href='/about' title='About'>
        <Info size={32} aria-label='About' />
      </LinkWrapper>
      <Map places={places} />
    </Fragment>
  )
}

export default HomeTemplate
