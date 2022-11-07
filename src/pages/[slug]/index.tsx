import graphqlClient from 'graphql/client'
import { GetPageBySlugQuery, GetPagesQuery } from 'graphql/generated/graphql'
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { PageTemplateProps } from 'templates/Pages/types'

const Page = dynamic(() => import('templates/Pages'))

const Pages: NextPage<PageTemplateProps> = ({ heading, body }) => {
  const router = useRouter()

  if (router.isFallback) return null

  return <Page heading={heading} body={body} />
}

export default Pages

export const getStaticPaths: GetStaticPaths = async () => {
  const { pages } = await graphqlClient.request<GetPagesQuery>(GET_PAGES, {
    first: 3
  })

  const paths = pages?.map(({ slug }) => ({
    params: { slug }
  }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await graphqlClient.request<GetPageBySlugQuery>(
    GET_PAGE_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  )

  if (!page) return { notFound: true }
  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}
