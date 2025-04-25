import { Box, HStack, Link, Text, useColorModeValue } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import Image from 'next/image'
import React from 'react'
import { FaFilePdf, FaGithub } from 'react-icons/fa'
import { IoHome } from 'react-icons/io5'

export const PaperItem = ({
    title,
    authors,
    conference,
    year,
    thumbnail,
    projectPage,
    paperLink,
    codeLink,
    tag = '',
}) => {
    // Extract color values at the top level
    const linkColor = useColorModeValue('linkLight', 'linkDark');
    const tagColor = 'red.500'; // Example for tag color

    const renderAuthors = (authorList) => {
        return authorList.map((author, index, array) => {
            let displayAuthor = author;
            let symbol = '';

            if (author.includes('*')) {
                displayAuthor = author.replace('*', '');
                symbol = '*';
            }

            return (
                <React.Fragment key={index}>
                    <Text as="span" fontWeight={author.includes('Chenxu Zhou') ? 'bold' : 'normal'}>
                        {displayAuthor}
                        {symbol && (
                            <Text as="sup" fontWeight="bold" color={tagColor}>
                                {symbol}
                            </Text>
                        )}
                    </Text>
                    {index < array.length - 1 ? ', ' : ''}
                </React.Fragment>
            );
        });
    };

    const isVideo = (file) => {
        return typeof file === 'string' && (file.endsWith('.mp4') || file.endsWith('.webm') || file.endsWith('.ogg'));
    };

    return (
        <Box w="100%" mb={6}>
            <HStack align="stretch" spacing={6}>
                {/* Thumbnail on the left */}
                <Box
                    flexShrink={0}
                    width="200px"
                    minheight="120px"
                    position="relative"
                    overflow="hidden"
                    borderRadius="8px"
                >
                    <Box
                        backgroundColor={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                        width="100%"
                        height="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="8px"
                    >
                        {/* Conditionally render video or image */}
                        {isVideo(thumbnail) ? (
                            <video
                                src={thumbnail}
                                autoPlay
                                loop
                                preload="metadata"
                                style={{
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: '100%',
                                }}
                            />
                        ) : (
                            <Image
                                src={thumbnail}
                                alt={title}
                                fill
                                style={{
                                    objectFit: 'cover',
                                }}
                                sizes="120px"
                            />
                        )}
                    </Box>
                </Box>

                {/* Content on the right */}
                <Box flex="1">
                    {/* Title */}
                    <Text fontSize="16" fontWeight="bold" mb={1}>
                        {title}
                    </Text>

                    {/* Authors with highlighting */}
                    <Text fontSize="md" mb={1}>
                        {renderAuthors(authors)}
                    </Text>

                    {/* Conference/Journal and Year */}
                    <Text fontSize="md" mb={1} fontStyle={'italic'}>
                        {conference} {year}
                        {' '}
                        {tag && (
                            <Text as="span" color={tagColor} fontWeight="bold">
                                {tag && `(${tag})`}
                            </Text>
                        )}
                    </Text>

                    {/* Links */}
                    <HStack spacing={4}>
                        {projectPage && (
                            <Link href={projectPage} color={linkColor} isExternal>
                                <HStack>
                                    <IoHome />
                                    <Text>Project Page</Text>
                                </HStack>
                            </Link>
                        )}
                        {paperLink && (
                            <Link href={paperLink} color={linkColor} isExternal>
                                <HStack>
                                    <FaFilePdf />
                                    <Text>Paper</Text>
                                </HStack>
                            </Link>
                        )}
                        {codeLink && (
                            <Link href={codeLink} color={linkColor} isExternal>
                                <HStack>
                                    <FaGithub />
                                    <Text>Code</Text>
                                </HStack>
                            </Link>
                        )}
                    </HStack>
                </Box>
            </HStack>
        </Box>
    );
};

export const GridItemStyle = () => (
    <Global
        styles={`
    `}
    />
)
