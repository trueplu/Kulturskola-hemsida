import { FC } from 'react'
import NextLink from 'next/link'
import { Flex, FlexProps, Link } from '@chakra-ui/react'

const Footer: FC<FlexProps> = (props) => (
    <Flex
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        pb="16"
        as="footer"
        {...props}
    >
        &copy; {new Date().getFullYear()} Fredrik Plumppu
        <NextLink href="/about" passHref>
            <Link variant="yellow" mt="4" px="3">
                Om
            </Link>
        </NextLink>
    </Flex>
)

export default Footer
