import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" fontSize="sm" color="gray.600">
      &copy; {new Date().getFullYear()} Chenxu Zhou. All Rights Reserved. The
      website is built based on this{' '}
      <Link
        href="https://github.com/craftzdog/craftzdog-homepage"
        isExternal
        target="_blank"
        opacity={0.7}
        color="teal.500"
        fontWeight="bold"
        textDecoration="underline"
        _hover={{
          color: 'teal.600',
          textDecoration: 'none'
        }}
      >
        template
      </Link>
      .
    </Box>
  )
}

export default Footer
