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
        <Grid gap="2" gridTemplateColumns="repeat(2, 1fr)" textAlign="center">
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
        </Grid>
    </Flex>
)

export default Footer
