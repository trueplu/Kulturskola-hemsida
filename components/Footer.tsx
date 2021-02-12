import { FC } from 'react'
import NextLink from 'next/link'
import { Flex, FlexProps, Link, Grid } from '@chakra-ui/react'

import { email } from '../shared/constants'

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
        <Grid gap="2" gridTemplateColumns="repeat(4, 1fr)" textAlign="center">
            <NextLink href="/om" passHref>
                <Link variant="yellow" mt="4">
                    Om
                </Link>
            </NextLink>
            <NextLink href={'mailto:' + email} passHref>
                <Link variant="yellow" mt="4">
                    Kontakt
                </Link>
            </NextLink>
            <NextLink href={'https://samuelplumppu.se/'} passHref>
                <Link variant="yellow" mt="4">
                    Samuel Plumppu
                </Link>
            </NextLink>
            {
                <NextLink href={'https://github.com/trueplu'} passHref>
                    <Link variant="yellow" mt="4">
                        GitHub
                    </Link>
                </NextLink>
            }
        </Grid>
    </Flex>
)

export default Footer
