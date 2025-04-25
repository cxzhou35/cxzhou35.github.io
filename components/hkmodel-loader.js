import { Box, Spinner } from '@chakra-ui/react'
import { forwardRef } from 'react'

export const ModelSpinner = () => (
    <Spinner
        size="xl"
        position="absolute"
        left="50%"
        top="50%"
        ml="calc(0px - var(--spinner-size) / 2)"
        mt="calc(0px - var(--spinner-size))"
    />
)

export const ModelContainer = forwardRef(({ children }, ref) => (
    <Box
        ref={ref}
        className="hollow knight"
        m="auto"
        mt={['-20px', '-60px', '-120px']}
        mb={['-40px', '-140px', '-200px']}
        w={[280, 480, 540]}
        h={[280, 480, 540]}
        position="relative"
    >
        {children}
    </Box>
))

const Loader = () => {
    return (
        <ModelContainer>
            <ModelSpinner />
        </ModelContainer>
    )
}

export default Loader
