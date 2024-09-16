import Layout from 'components/BlogLayout'
import Container from 'components/BlogContainer'

import { PageLayout } from 'components/PageLayout'
import dynamic from 'next/dynamic'
// import * as demo from 'lib/demo.data'

const DynamicComponentWithNoSSR = dynamic(
  () => import('../../components/FamilyTree'),
  { ssr: false },
)

export default function FamilyTreePage(props: {
  family: string
  preview?: boolean
}) {
  const { family, preview } = props

  return (
    <>
      <Layout preview={preview}>
        <PageLayout>
          <Container>
            <DynamicComponentWithNoSSR family={family} />
          </Container>
        </PageLayout>
      </Layout>
    </>
  )
}
