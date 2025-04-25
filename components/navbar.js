import { CalendarIcon, ChatIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
    Box,
    Container,
    Flex,
    Heading,
    IconButton,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Stack,
    useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { forwardRef } from 'react'
import { IoLogoGithub } from 'react-icons/io5'

import Logo from './logo'
import ThemeToggleButton from './utils/theme-toggle-button'

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
    return (
        <Link
            as={NextLink}
            href={href}
            scroll={false}
            p={2}
            bg={active ? 'grassTeal' : undefined}
            color={active ? '#202023' : inactiveColor}
            target={target}
            {...props}
        >
            {children}
        </Link>
    )
}

const MenuLink = forwardRef((props, ref) => (
    <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
    const { path } = props

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            css={{ backdropFilter: 'blur(10px)' }}
            zIndex={2}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

                {/* navbar item list */}
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href="/papers" path={path}>
                        <CalendarIcon mb={1} mx="2px" /> {' '}Publications
                    </LinkItem>
                    <LinkItem href="/posts" path={path}>
                        <ChatIcon mb={1} mx="2px" /> {' '}Posts
                    </LinkItem>
                    <LinkItem
                        target="_blank"
                        href="https://github.com/cxzhou35/cxzhou35.github.io"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                        style={{ gap: 4 }}
                        pl={2}
                    >
                        <IoLogoGithub mb={1} mx="2px" /> {' '}Source
                    </LinkItem>
                </Stack>

                {/* toggle button with options */}
                <Box flex={1} align="right">
                    <ThemeToggleButton />

                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                <MenuItem as={MenuLink} href="/">
                                    About
                                </MenuItem>
                                <MenuItem as={MenuLink} href="/papers">
                                    Publications
                                </MenuItem>
                                <MenuItem as={MenuLink} href="/posts">
                                    Posts
                                </MenuItem>
                                <MenuItem
                                    as={Link}
                                    href="https://github.com/cxzhou35/cxzhou35.github.io"
                                >
                                    View Source
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar
