import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ErrorProps } from './types'
import * as Styled from './styles'

const ErrorTemplate: React.FC<ErrorProps> = ({ statusCode }) => {
  const router = useRouter()
  const ErrorImage = '/assets/error.svg'
  return (
    <>
      <Head>
        <title>{`Uni.Cloud | Error `}</title>
      </Head>
      <Styled.Container>
        <Styled.Wrapper>
          <Image
            src={ErrorImage}
            alt='error image'
            width='500'
            height='500'
            loading='lazy'
          />
        </Styled.Wrapper>
        <Styled.Box>
          {statusCode && <p>{`Error ${statusCode}`}</p>}
          <Styled.Title>Oops! Something unexpected has occurred!</Styled.Title>
          <Styled.Text>
            {` We're sorry for the inconvenience, but it looks like the page you're
            trying to access is down for maintenance.`}
          </Styled.Text>
          <Styled.Text>
            Our team is already working to normalize access.
          </Styled.Text>
          <Styled.Text>Thanks for the patience!</Styled.Text>
          <Styled.Button type='button' onClick={() => router.push('/')}>
            Home
          </Styled.Button>
        </Styled.Box>
      </Styled.Container>
    </>
  )
}
export default ErrorTemplate
