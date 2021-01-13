import { FC } from 'react'
import { Text, Link, Heading, Grid, Box, BoxProps } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'

import { email } from '../shared/constants'

interface Partner {
    name: string
    link: string
    logo: string
}

const partners: Partner[] = [
    {
        name: 'Klimatprata',
        link: 'https://klimatprata.se',
        logo: '/images/klimatprata.png',
    },
    {
        name: `We Don't Have Time`,
        link:
            'https://www.wedonthavetime.org/our-community?futurevisions.earth',
        logo: '/images/wedonthavetime-2-line-rgb.png',
    },
]

export interface PartnersProps extends BoxProps {}

const Partners: FC<PartnersProps> = (props) => {
    return partners.length ? (
        <Box {...props}>
            <Heading textAlign="center" mb="2">
                Våra partners
            </Heading>
            <Text>
                <NextLink href="/about" passHref>
                    <Link variant="yellow">FutureVisions.earth</Link>
                </NextLink>{' '}
                är ett ideellt initiativ som stöttas av och samarbetar med
                följande partners:
            </Text>
            <Grid
                mx="auto"
                gridTemplateColumns="repeat(auto-fill, minmax(min(250px, 100%), 1fr))"
                gap="4"
                justifyContent="center"
                pt="4"
            >
                {partners.map((p) => (
                    <Link
                        key={p.name}
                        height="100px"
                        width="auto"
                        position="relative"
                        isExternal
                        href={p.link}
                    >
                        <Image
                            src={p.logo}
                            layout="fill"
                            unoptimized
                            objectFit="contain"
                            alt={p.name + ' logo'}
                        />
                    </Link>
                ))}
            </Grid>
            <Text textAlign="center" mt="4">
                Vill du samarbeta?{' '}
                <Link href={`mailto:${email}`} variant="yellow">
                    Hör av dig!
                </Link>
            </Text>
        </Box>
    ) : null
}

export default Partners
