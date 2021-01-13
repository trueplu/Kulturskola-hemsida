import { FC } from 'react'
import NextLink from 'next/link'
import { Divider, Flex, FlexProps, Link } from '@chakra-ui/react'

const Footer: FC<FlexProps> = (props) => (
    <Flex
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        pb="16"
        as="footer"
        {...props}
    >
        &copy; {new Date().getFullYear()} FutureVisions.earth
        <NextLink href="/about" passHref>
            <Link variant="yellow" mt="4">
                Om oss
            </Link>
        </NextLink>
    </Flex>
)

export default Footer
