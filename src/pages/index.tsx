import type { NextPage, GetStaticProps } from 'next'
import { MapProps } from 'components/Map/types'
import HomeTemplate from 'templates/Home'
import graphqlClient from 'graphql/client'
import { GET_PLACES } from 'graphql/queries'
import { GetPlacesQuery } from 'graphql/generated/graphql'

const Home: NextPage<MapProps> = ({ places }) => {
  return <HomeTemplate places={places} />
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const { places } = await graphqlClient.request<GetPlacesQuery>(GET_PLACES, {
    first: 100
  })
  return {
    props: {
      places: places
    }
  }
}
