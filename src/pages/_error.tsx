import ErrorTemplate from 'templates/Error'

import { NextPage } from 'next'

const Error: NextPage = (error: Record<string, number>) => {
  const status = error.statusCode
  return <ErrorTemplate statusCode={status} />
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
