import { Box, Link, useColorModeValue } from '@chakra-ui/react';
import { FaGithub, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";
import { SiGooglescholar } from 'react-icons/si';

const SocialItem = ({ icon, link }) => {
    return (
        <Link href={link} isExternal>
            <Box
                as={icon}
                size="24px"
                color={useColorModeValue('linkLight', 'linkDark')}
                _hover={{ color: useColorModeValue('teal.600', 'teal.400') }}
            />
        </Link>
    );
}

const Social = () => {
    return (
        <Box display="flex" alignItems="center" gap={4} mt={2} mb={4}>
            <SocialItem icon={FaGithub} link="https://github.com/cxzhou35" />
            <SocialItem icon={SiGooglescholar} link="https://scholar.google.com/citations?user=OmsP5GYAAAAJ&hl=en" />
            <SocialItem icon={FaTwitter} link="https://twitter.com/cxzhou35" />
            <SocialItem icon={FaTelegramPlane} link="https://t.me/cxzhou35" />
            <SocialItem icon={IoMdMail} link="mailto:cxzhou35@zju.edu.cn" />
        </Box>
    );
};

export default Social;
