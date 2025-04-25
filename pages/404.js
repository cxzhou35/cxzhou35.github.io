import {
    Box,
    Button,
    Container,
    Divider,
    Heading,
    Text
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaHome } from "react-icons/fa";


const NotFound = () => {
    return (
        <Container>
            <Heading as="h1">Not found</Heading>
            <Text>The page you&apos;re looking for was not found.</Text>
            <Divider my={6} />
            <Box my={6} align="center">
                <Button as={NextLink} href="/" colorScheme="teal" rightIcon={<FaHome />}>
                    Return to home
                </Button>
            </Box>
        </Container>
    )
}

export default NotFound
