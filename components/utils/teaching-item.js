import { ChevronRightIcon } from '@chakra-ui/icons'
import { Flex, ListIcon, Text, useColorModeValue } from '@chakra-ui/react'

const TeachingItem = ({ courseName, time }) => {
    const timeColor = useColorModeValue('gray.600', 'gray.400')

    return (
        <Flex justify="space-between" align="center">
            <Flex align="center">
                <ListIcon as={ChevronRightIcon} color={useColorModeValue('linkLight', 'linkDark')} />
                <Text>{courseName}</Text>
            </Flex>
            <Text color={timeColor}>{time}</Text>
        </Flex>
    )
}

export default TeachingItem
