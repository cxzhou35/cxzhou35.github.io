import { Box, Container } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Footer from '../footer'
import HKModelLoader from '../hkmodel-loader'
import Navbar from '../navbar'

const LazyHKModel = dynamic(() => import('../hkmodel'), {
  ssr: false,
  loading: () => <HKModelLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Zicx's homepage" />
        <meta name="author" content="Chenxu Zhou" />
        <meta name="author" content="Zicx" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Chenxu Zhou" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@cxzhou35" />
        <meta name="twitter:creator" content="@cxzhou35" />
        <title>Zicx&apos;s Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container
        maxW={{
          base: 'container.md', // Default width on mobile
          md: 'container.lg', // Wider on medium screens
          lg: 'container.xl' // Even wider on large screens
        }}
        pt={14}
      >
        <LazyHKModel />
        {children}
      </Container>

      <Footer />
    </Box>
  )
}

export default Main
