import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.HOST || ''

const graphqlClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`
  }
})

export default graphqlClient
