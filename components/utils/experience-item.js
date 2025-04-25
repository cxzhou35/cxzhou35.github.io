import { Box, Text } from '@chakra-ui/react'
import { BioAddress, BioLogo, BioYear } from './bio-item'

const ExperienceItem = ({
    logo,
    logoAlt,
    institution,
    period,
    location,
    title
}) => {
    return (
        <Box display="flex" gap={4} mb={4}>
            <Box flexShrink={0}>
                <BioLogo
                    src={logo}
                    alt={logoAlt}
                />
            </Box>
            <Box>
                <BioAddress>{institution}</BioAddress> <br />
                <BioYear>{period}, {location}</BioYear>
                <Text>{title}</Text>
            </Box>
        </Box>
    )
}

export default ExperienceItem
