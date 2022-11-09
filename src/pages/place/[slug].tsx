import graphqlClient from 'graphql/client'
import { GetPlaceBySlugQuery, GetPlacesQuery } from 'graphql/generated/graphql'
import { GET_PLACES, GET_PLACE_BY_SLUG } from 'graphql/queries'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { PlaceTemplateProps } from 'templates/Place/types'

const PlacePage = dynamic(() => import('templates/Place'))

const Place: NextPage<PlaceTemplateProps> = ({ place }) => {
  const router = useRouter()

  if (router.isFallback) return null

  return <PlacePage place={place} />
}

export default Place

export const getStaticPaths: GetStaticPaths = async () => {
  const { places } = await graphqlClient.request<GetPlacesQuery>(GET_PLACES, {
    first: 3
  })

  const paths = places?.map(({ slug }) => ({
    params: { slug }
  }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await graphqlClient.request<GetPlaceBySlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  )

  if (!place) return { notFound: true }
  return {
    props: {
      place
    }
  }
}
