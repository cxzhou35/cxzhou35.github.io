import { InfoIcon } from '@chakra-ui/icons'
import {
  IconButton,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import React from 'react'

const NamePopover = ({
  name = '周晨旭',
  description = 'My first name is Chenxu, and my last name is Zhou. which means the rising sun in Chinese. I prefer to be addressed as my nickname Zicx, pronounced the same as Zix.',
  placement = 'right',
  trigger = 'hover',
  iconSize = 'sm',
  fontSize = 14
}) => {
  const textColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  const popoverBg = useColorModeValue('#fffbf0', '#2D3748')

  return (
    <Popover placement={placement} trigger={trigger}>
      <PopoverTrigger>
        <IconButton
          aria-label={`${name} meaning`}
          icon={<InfoIcon />}
          size={iconSize}
          ml={-2}
          mb={2}
          variant="ghost"
          _hover={{
            bg: useColorModeValue('iconLight', 'iconDark')
          }}
        />
      </PopoverTrigger>
      <PopoverContent bg={popoverBg} color={textColor}>
        <PopoverBody>
          <Text fontSize={fontSize}>{description}</Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default NamePopover
