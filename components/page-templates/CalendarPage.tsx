import Layout from 'components/BlogLayout'
import Container from 'components/BlogContainer'

import { PageLayout } from 'components/PageLayout'
import dynamic from 'next/dynamic'
// import * as demo from 'lib/demo.data'

const DynamicComponentWithNoSSR = dynamic(() => import('../GoogleCalendar'), {
  ssr: false,
})

export default function CalendarPage(props: { preview?: boolean }) {
  const { preview } = props

  return (
    <>
      <Layout preview={preview}>
        <PageLayout>
          <Container>
            <DynamicComponentWithNoSSR />
          </Container>
        </PageLayout>
      </Layout>
    </>
  )
}
