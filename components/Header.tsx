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
        <Link py={[2, 4]} px={[2, 4]} variant="white">
            {children}
        </Link>
    </NextLink>
)

const Header = () => (
    <Container
        as="header"
        maxW="1080px"
        p="0"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
    >
        <NextLink href="/" passHref>
            <Link
                fontFamily={theme.fonts.heading}
                fontSize="xl"
                px={[2, 4]}
                py={[2, 3]}
                variant="white"
            >
                Musiklärare Fredrik Plumppu
            </Link>
        </NextLink>

        <Flex as="nav" fontWeight="bold" justifyContent="flex-start">
            <NavLink href="/about">Om oss</NavLink>
            <NavLink href={'mailto:' + email}>Kontakt</NavLink>
        </Flex>
    </Container>
)

export default Header
