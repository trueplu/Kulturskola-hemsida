import { Heading, Link, Text, Center } from '@chakra-ui/react'
import NextLink from 'next/link'

import Layout from '../layouts/Layout'
import PrimaryCTA from '../components/PrimaryCTA'
import Image from 'next/image'

const Om = () => (
    <Layout maxW="xl" fontSize={[16, null, 20]}>
        <Heading textAlign="center" mb="8">
            Om mig
        </Heading>
        <Center mb="8">
            <Image
                src="/images/Baryton.jpg"
                alt="Fredrik sitting in a circle of baritones holding a trumpet"
                priority
                loading="eager"
                width={250}
                height={250}
            />
        </Center>
        <Text mt="2">
            Brasslärare vid Fristad och Borås musikskolor(numera Borås
            Kulturskola) sedan -94. Nyfiken på musik och undervisning i olika
            former och undervisar förutom i brassinstrument också orkester,
            mindre ensembler och babyrytmik. Har tidigare undervisat i
            grundskolans musikundervisning och vid estetprogrammet på
            Bäckängsgymnasiet.{' '}
        </Text>
        <Text mt="2">
            {' '}
            Tycker om att spela trumpet på fritiden och jobbar med diverse
            musikaliska projekt i det egna företaget
            <NextLink href={'http://plumppumusik.se/'} passHref>
                <Link variant="yellow" mt="4">
                    Plumppu Musikproduktion
                </Link>
            </NextLink>
            Spelar med i Uffe Big Band, Göteborg Symphonic Band och både spelar
            med i och är samordnare för Borås Symfoniorkester.
        </Text>
        <Text mt="2">
            För att må bra så är det viktigt för mig röra mig ute i naturen
            antingen genom att springa orientering, plocka blåbär eller åka
            skidor. Senaste intresset är
            <NextLink href={'https://github.com/trueplu'} passHref>
                <Link variant="yellow" mt="4">
                    programmering
                </Link>
            </NextLink>
            och det är så och inte minst genom min son Samuel som denna sida
            blivit till. Stort tack!
        </Text>
        <Center>
            <PrimaryCTA />
        </Center>
    </Layout>
)

export default Om
