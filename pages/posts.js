import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { Meta } from '../components/utils/post'

const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Posts <Meta color="green">WIP</Meta>
            </Heading>

        </Container>
    </Layout>
)

export default Posts
export { getServerSideProps } from '../components/utils/chakra'
