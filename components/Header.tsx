import { Flex, Link, Container, Stack } from '@chakra-ui/react'
import NextLink from 'next/link'

import { theme } from '../shared/theme'
import { email } from '../shared/constants'

interface NavLinkProps {
    href: string
    children: React.ReactNode
}
const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
    <NextLink href={href} passHref>
        <Link p="4">{children}</Link>
    </NextLink>
)

const Header = () => (
    <Container as="header" maxW="xl">
        <Flex justify="space-between" align="center" py="4">
            <NextLink href="/" passHref>
                <Link
                    fontFamily={theme.fonts.heading}
                    fontSize="xl"
                    px="2"
                    py="3"
                >
                    FutureVisions.earth
                </Link>
            </NextLink>

            <Stack direction="row" as="nav" fontWeight="bold">
                <NavLink href={'mailto:' + email}>Kontakta oss</NavLink>
            </Stack>
        </Flex>
    </Container>
)

export default Header
