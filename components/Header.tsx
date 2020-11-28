import { Flex, Link, Container } from '@chakra-ui/react'
import NextLink from 'next/link'

import { theme } from '../shared/theme'

// interface NavLinkProps {
//     href: string
//     children: React.ReactNode
// }
// const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
//     <NextLink href={href} passHref>
//         <Link py="2" px="3">
//             {children}
//         </Link>
//     </NextLink>
// )

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

            {/* <Stack direction="row" as="nav">
                <NavLink href="/om-oss">Om oss</NavLink>
                <NavLink href="/engagera-dig">Engagera dig</NavLink>
            </Stack> */}
        </Flex>
    </Container>
)

export default Header
