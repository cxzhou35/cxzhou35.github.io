import { Box, IconButton, Text, Tooltip, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FaLanguage } from 'react-icons/fa';

const MotionText = motion(Text);

const Welcome = () => {
    const [language, setLanguage] = useState('en'); // default: en
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const messages = {
        en: {
            text: "Hello, I'm Zicx, welcome to my homepage!",
            fontFamily: 'M PLUS Rounded 1c',
            buttonText: 'en'
        },
        zh: {
            text: '你好, 我是周晨旭, 欢迎来到我的主页!',
            fontFamily: 'LXGW WenKai TC',
            buttonText: 'zh'
        },
        kr: {
            text: '안녕하세요, 저는 조신욱입니다. 제 홈페이지에 오신 것을 환영합니다!',
            fontFamily: 'Noto Serif KR',
            buttonText: 'kr'
        }
    };

    const toggleLanguage = () => {
        setIsAutoPlaying(false);
        setLanguage((prevLanguage) => {
            if (prevLanguage === 'en') {
                return 'zh';
            } else if (prevLanguage === 'zh') {
                return 'kr';
            } else {
                return 'en';
            }
        });
    };

    useEffect(() => {
        if (!isAutoPlaying) return;

        const timer = setInterval(() => {
            setLanguage((prevLanguage) => {
                if (prevLanguage === 'en') {
                    return 'zh';
                } else if (prevLanguage === 'zh') {
                    return 'kr';
                } else {
                    return 'en';
                }
            });
        }, 3000);

        return () => clearInterval(timer);
    }, [isAutoPlaying]);

    return (
        <Box
            borderRadius="lg"
            p={3}
            mt={4}
            mb={4}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.400', 'whiteAlpha.200')}
            boxShadow={"lg"}
            css={{
                backdropFilter: 'blur(10px)',
                animation: 'float 3s ease-in-out infinite',
            }}
            position="relative"
            _hover={{
                transform: 'scale(1.05)',
                transition: 'transform 0.3s ease-in-out',
            }}
        >
            <MotionText
                fontSize="md"
                fontFamily={messages[language].fontFamily}
                key={language}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.5 }}
            >
                {messages[language].text}
            </MotionText>
            <Tooltip
                label="Toggle Language"
                fontSize="12"
                placement="right"
                hasArrow
                bg={useColorModeValue('iconLight', 'iconDark')}
                color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                borderRadius="lg"
            >
                <IconButton
                    aria-label="Toggle Language"
                    icon={<FaLanguage />}
                    onClick={toggleLanguage}
                    position="absolute"
                    top="-8px"
                    right="10px"
                    size="sm"
                    variant="ghost"
                    _hover={{
                        color: useColorModeValue('pink.500', 'teal.300'),
                        transform: 'rotate(20deg)',
                        transition: 'transform 0.2s ease-in-out',
                    }}
                />
            </Tooltip>
        </Box>
    );
};

export default Welcome;
