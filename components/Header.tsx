import { Flex, Link, Container } from '@chakra-ui/react'
import NextLink from 'next/link'

import { theme } from '../shared/theme'
import { email, documentsLink, videosLink } from '../shared/constants'

interface NavLinkProps {
    href: string
    children: React.ReactNode
    isExternal?: boolean
}
const NavLink: React.FC<NavLinkProps> = ({
    href,
    children,
    isExternal = false,
}) => (
    <NextLink href={href} passHref>
        <Link
            py={[2, 3, 4]}
            pt={[1, 3, 4]}
            px={[3, 3, 4]}
            variant="white"
            fontSize={['lg', 'md']}
            isExternal={isExternal}
        >
            {children}
        </Link>
    </NextLink>
)

const Header = () => (
    <Container
        as="header"
        maxW="1080px"
        p="0"
        display={['grid', 'flex']}
        justifyContent={['center', 'space-between']}
        alignItems="center"
        borderBottom={['1px dotted white', '0']}
    >
        <NextLink href="/" passHref>
            <Link
                fontFamily={theme.fonts.heading}
                fontSize="xl"
                px={[3, 4]}
                py={[3, 4]}
                pb={[1, 4]}
                variant="white"
            >
                Musiklärare Fredrik Plumpp
            </Link>
        </NextLink>

        <Flex
            as="nav"
            fontWeight="bold"
            justifyContent={['center', 'flex-start']}
        >
            <NavLink href="/instrument">Instrument</NavLink>
            <NavLink href="/orkester">Orkester</NavLink>
            <NavLink href={documentsLink} isExternal>
                Dokument
            </NavLink>
            <NavLink href={videosLink} isExternal>
                Videos
            </NavLink>
            <NavLink href="/om">Om</NavLink>
            <NavLink href={'mailto:' + email}>Kontakt</NavLink>
        </Flex>
    </Container>
)

export default Header
