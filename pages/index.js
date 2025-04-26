import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Container,
    Heading,
    Image,
    Link,
    List,
    ListIcon,
    ListItem,
    Text,
    useColorModeValue
} from '@chakra-ui/react';
import NextLink from 'next/link';
import Layout from '../components/layouts/article';
import Social from '../components/social';
import ExperienceItem from '../components/utils/experience-item';
import NamePopover from '../components/utils/name-popover';
import Paragraph from '../components/utils/paragraph';
import Section from '../components/utils/section';
import TeachingItem from '../components/utils/teaching-item';
import Welcome from '../components/welcome';


const Home = () =>
(
    <Layout>
        <Container>
            {/* welcome message */}
            <Welcome />

            {/* profile */}
            <Box display={{ md: 'flex' }} mt={2}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Chenxu Zhou
                    </Heading>
                    <p>Ph.D. Student <Link as={NextLink}
                        href="https://github.com/zju3dv" isExternal fontWeight="bold">@ZJU3DV</Link></p>
                    <Box display="flex" alignItems="center" gap={2}>
                        <Text fontFamily="LXGW WenKai TC" fontSize={24}>周晨旭</Text>
                        <NamePopover
                            description="My first name is Chenxu, and my last name is Zhou, which means the rising sun in Chinese. I prefer to be addressed as my nickname Zicx, pronounced the same like Zix."
                            placement="right"
                            trigger="hover"
                            iconSize="sm"
                            fontSize={12}
                        />
                    </Box>

                    {/* sofial media links */}
                    <Social />
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Box
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        w="125px"
                        h="125px"
                        display="inline-block"
                        borderRadius="lg" // full / square
                        overflow="hidden"
                    >
                        <Image
                            src="/images/zicx.jpeg"
                            alt="Profile image"
                            width="125"
                            height="125"
                        />
                    </Box>
                </Box>
            </Box>

            {/* bio section */}
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <Paragraph>
                    I am a first-year Ph.D. student in Computer Science at Zhejiang University, advised by {' '}
                    <Link as={NextLink} href="https://www.xzhou.me/" passHref scroll={false} target='_blank'>Prof. Xiaowei Zhou</Link>
                    {' '} and {' '}
                    <Link as={NextLink} href="https://pengsida.net/" passHref scroll={false} target='_blank'>Prof. Sida Peng</Link>.

                    My research interests lie in the fields of 3D/4D reconstruction and generative models.
                    My long-term goal is to <b>create immersive, interactive environments that seamlessly integrate digital and physical worlds</b>—experiences akin to the virtual realms envisioned in film {' '}
                    <Link href="https://www.imdb.com/title/tt1677720/" scroll={false} target='_blank'>
                        Ready Player One <ExternalLinkIcon mx="1px" mb="1" />
                    </Link>.
                </Paragraph>

                <Paragraph>
                    Previously, I obtained my bachelor degree from College of Optical Science and Engineering
                    and Chu Kochen Honors College (ACEE)
                    at {' '}
                    <Link as={NextLink} href="https://www.zju.edu.cn/english/" passHref scroll={false} target='_blank'>
                        Zhejiang University
                    </Link>
                    {' '} in 2024.
                    During the summer of 2023, I was privileged to work closely with Taichi Graphics {' '} (now {' '}
                    <Link as={NextLink} href="https://www.meshy.ai/" passHref scroll={false} target='_blank'>
                        Meshy AI
                    </Link>
                    )
                    .
                </Paragraph>

                <Box align="center" my={4}>
                    <Button
                        as={NextLink}
                        href="/papers"
                        scroll={false}
                        rightIcon={<ChevronRightIcon />}
                        colorScheme="teal"
                    >
                        My publications
                    </Button>
                </Box>
            </Section>

            {/* experience section */}
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Experience
                </Heading>
                <ExperienceItem
                    logo="/images/zju_logo.png"
                    logoAlt="ZJU Logo"
                    institution="Zhejiang University"
                    period="2024.9 - present"
                    location="Hangzhou, China"
                    title="Ph.D. Student in Computer Science"
                />
                <ExperienceItem
                    logo="/images/taichi_logo.png"
                    logoAlt="Taichi Logo"
                    institution="Taichi Graphics"
                    period="2023.6 - 2023.10"
                    location="Beijing, China"
                    title="Research Intern."
                />
                <ExperienceItem
                    logo="/images/zju_logo.png"
                    logoAlt="ZJU Logo"
                    institution="Zhejiang University"
                    period="2020.9 - 2024.6"
                    location="Hangzhou, China"
                    title="B.Eng. in Optoelectronic Information Science and Engineering"
                />
            </Section>


            {/* ta section */}
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Teaching Assistant
                </Heading>
                <List spacing={3}>
                    <ListItem>
                        <TeachingItem
                            courseName="Computational Photography"
                            time="Spring, 2025"
                        />
                        <TeachingItem
                            courseName="Computational Photography"
                            time="Spring, 2024"
                        />
                    </ListItem>
                </List>
            </Section>

            {/* hobby section */}
            <Section delay={0.4}>
                <Heading as="h3" variant="section-title">
                    I ♥
                </Heading>
                <List>
                    <ListItem>
                        <ListIcon as={ChevronRightIcon} color={useColorModeValue('linkLight', 'linkDark')} />
                        Music, Animate,
                        Visual Novels (My favorite is <Link href="https://vndb.org/v2002" scroll={false} target='_blank'>Steins;Gate</Link>),
                        Playing Drums
                    </ListItem>
                    <ListItem>
                        <ListIcon as={ChevronRightIcon} color={useColorModeValue('linkLight', 'linkDark')} />
                        Enthusiast of Vim/Neovim, I love its design philosophy and efficiency.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={ChevronRightIcon} color={useColorModeValue('linkLight', 'linkDark')} />
                        My personal {' '}<Link href="https://note.zicx.top/" scroll={false} target='_blank'>notebook</Link>, written mainly in Chinese.
                    </ListItem>
                </List>
            </Section>
        </Container>
    </Layout>
)


export default Home
export { getServerSideProps } from '../components/utils/chakra';
