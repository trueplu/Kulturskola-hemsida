import { Flex, Link, Container } from '@chakra-ui/react'
import NextLink from 'next/link'

import { theme } from '../shared/theme'
import { documentsLink, videosLink } from '../shared/constants'

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
            py={[2, 3]}
            pt={[1, 3]}
            px={[3, 3]}
            variant="white"
            fontSize={['sm', null, 'md']}
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
                fontSize={['md']}
                px={[2, 3]}
                py={[2, 3]}
                pb={[1, 3]}
                variant="white"
                textAlign={['center', 'left']}
            >
                Brasslärare Fredrik Plumppu
            </Link>
        </NextLink>

        <Flex
            as="nav"
            fontWeight="bold"
            justifyContent={['center', 'flex-start']}
            flexWrap={['wrap', 'unset']}
        >
            <NavLink href="/ovningar">Övningar</NavLink>

            {/* <NavLink href="/orkester">Orkester</NavLink> */}

            <NavLink href={documentsLink} isExternal>
                Dokument
            </NavLink>
            <NavLink href={videosLink} isExternal>
                Videos
            </NavLink>
            <NavLink href="/om">Om</NavLink>
        </Flex>
    </Container>
)

export default Header
