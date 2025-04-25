import { ChevronRightIcon } from '@chakra-ui/icons'
import { Badge, Box, Heading, Image, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

export const Title = ({ children }) => (
    <Box>
        <Link as={NextLink} href="/posts">
            Posts
        </Link>
        <span>
            {' '}
            <ChevronRightIcon />{' '}
        </span>
        <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
            {children}
        </Heading>
    </Box>
)

export const PostImage = ({ src, alt }) => (
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children, color }) => (
    <Badge colorScheme={color} mr={2}>
        {children}
    </Badge>
)
