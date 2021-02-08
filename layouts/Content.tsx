import { Box, BoxProps } from '@chakra-ui/react'

const Content = (props: BoxProps) => (
    <Box maxW="2xl" px={['2', '4', '8']} mx="auto" {...props} />
)

export default Content
