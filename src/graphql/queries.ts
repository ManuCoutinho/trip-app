import { gql } from 'graphql-request'

export const GET_PAGES = gql`
  query getPages($first: Int) {
    pages(first: $first) {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`

export const GET_PAGE_BY_SLUG = gql`
  query getPageBySlug($slug: String!) {
    page(where: { slug: $slug }) {
      id
      slug
      heading
      body {
        html
      }
    }
  }
`
export const GET_PLACES = gql`
  query getPlaces {
    places {
      id
      name
      location {
        latitude
        longitude
      }
      slug
      description {
        html
      }
      gallery {
        width
        height
        url
      }
    }
  }
`
