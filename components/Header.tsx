import { Flex, Link, Container } from '@chakra-ui/react'
import NextLink from 'next/link'

import { theme } from '../shared/theme'
import { email } from '../shared/constants'

interface NavLinkProps {
    href: string
    children: React.ReactNode
}
const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
    <NextLink href={href} passHref>
        <Link py="4" px="4">
            {children}
        </Link>
    </NextLink>
)

const Header = () => (
    <Container
        as="header"
        maxW="xl"
        p="0"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
    >
        <NextLink href="/" passHref>
            <Link fontFamily={theme.fonts.heading} fontSize="xl" px="4" py="3">
                FutureVisions.earth
            </Link>
        </NextLink>

        <Flex as="nav" fontWeight="bold">
            <NavLink href="/about">Om oss</NavLink>
            <NavLink href={'mailto:' + email}>Kontakt</NavLink>
        </Flex>
    </Container>
)

export default Header
