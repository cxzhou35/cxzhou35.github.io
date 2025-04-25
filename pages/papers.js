import { Container, Heading, Text } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import { PaperItem } from '../components/utils/paper-item';
import Section from '../components/utils/section';

const Papers = () => (
    <Layout title="Publications">
        <Container
            maxW={{
                base: "container.md",
                md: "container.lg",
                lg: "70%"
            }}
        >
            <Heading as="h3" fontSize={20} mb={2} pt={6}>
                Publications
            </Heading>
            <Text fontSize="sm" color="gray.500" mb={4}>
                The <Text as="span" fontWeight="bold">*</Text> denotes equal contribution
            </Text>

            <Section delay={0.1}>
                <PaperItem
                    title="LiDAR-RT: Gaussian-based Ray Tracing for Dynamic LiDAR Re-simulation"
                    authors={[
                        "Chenxu Zhou*",
                        "Lvchang Fu*",
                        "Sida Peng",
                        "Yunzhi Yan",
                        "Zhanhua Zhang",
                        "Yong Chen",
                        "Jiazhi Xia",
                        "Xiaowei Zhou"
                    ]}
                    conference="CVPR"
                    year="2025"
                    thumbnail="https://raw.githubusercontent.com/cxzhou35/projects/main/homepage/videos/papers/lidar_rt.mp4"
                    projectPage="https://zju3dv.github.io/lidar-rt/"
                    paperLink="https://arxiv.org/abs/2412.15199"
                    codeLink="https://github.com/zju3dv/LiDAR-RT"
                />
            </Section>

            <Section delay={0.2}>
                <PaperItem
                    title="Street Gaussians: Modeling Dynamic Urban Scenes with Gaussian Splatting"
                    authors={[
                        "Yunzhi Yan",
                        "Haotong Lin",
                        "Chenxu Zhou",
                        "Weijie Wang",
                        "Haiyang Sun",
                        "Kun Zhan",
                        "Xianpeng Lang",
                        "Xiaowei Zhou",
                        "Sida Peng"
                    ]}
                    conference="ECCV"
                    year="2024"
                    thumbnail="https://raw.githubusercontent.com/cxzhou35/projects/main/homepage/videos/papers/street_gaussians.mp4"
                    projectPage="https://zju3dv.github.io/street_gaussians"
                    paperLink="https://arxiv.org/abs/2401.01339"
                    codeLink="https://github.com/zju3dv/street_gaussians"
                />
            </Section>
        </Container>
    </Layout>
);

export default Papers;
export { getServerSideProps } from '../components/utils/chakra';
