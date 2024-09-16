import Container from 'components/BlogContainer'
// import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import Carousel from 'components/Carousel'
import IndexPageHead from 'components/IndexPageHead'
import { PageLayout } from 'components/PageLayout'
// import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'

export interface HomePageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}

export default function HomePage(props: HomePageProps) {
  const { preview, loading, posts, settings } = props
  const [heroPost, ...morePosts] = posts || []
  // const { title = demo.title, description = demo.description } = settings || {}

  return (
    <>
      <IndexPageHead settings={settings} />

      <Layout preview={preview} loading={loading}>
        <Carousel />
        <PageLayout>
          <Container>
            <h1>Welcome.</h1>
          </Container>
        </PageLayout>
      </Layout>
    </>
  )
}
