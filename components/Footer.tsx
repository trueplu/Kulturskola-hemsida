'use client'

import { FC } from 'react'
import { Flex, FlexProps, Grid } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'

import { email } from '../shared/constants'

const Footer: FC<FlexProps> = (props) => (
    <Flex
        justifyContent="space-evenly"
        flexDirection="column"
        alignItems="center"
        pb="16"
        as="footer"
        {...props}
    >
        &copy; {new Date().getFullYear()} Fredrik Plumppu
        <Grid
            gap="2"
            gridTemplateColumns="max-content repeat(2, 1fr)"
            textAlign="center"
        >
            <Link href="/om" variant="yellow" mt="4">
                Om
            </Link>
            <Link href={'mailto:' + email} variant="yellow" mt="4">
                Kontakt
            </Link>
            <Link href={'https://samuelplumppu.se/'} variant="yellow" mt="4">
                Samuel Plumppu
            </Link>
        </Grid>
    </Flex>
)

export default Footer
