'use client'

import { Heading, Text, Center } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'

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
            Brasslärare vid Borås Kulturskola sedan -94. Nyfiken på musik och
            undervisning i olika former och undervisar förutom i brassinstrument
            också orkester, mindre ensembler och babyrytmik. Är medförfattare
            till babyrytmikboken{' '}
            <Link
                href={'https://www.bokus.com/bok/9789163189760/till-din-baby/'}
                variant="yellow"
                mt="4"
            >
                Till din baby
            </Link>{' '}
            . Har tidigare undervisat i grundskolans musikundervisning och vid
            estetprogrammet på Bäckängsgymnasiet.{' '}
        </Text>
        <Text mt="8">
            {' '}
            Tycker om att spela trumpet på fritiden och jobbar med diverse
            musikaliska projekt i det egna företaget{' '}
            <Link href={'http://plumppumusik.se/'} variant="yellow" mt="4">
                Plumppu Musikproduktion
            </Link>{' '}
            Spelar med i Göteborg Symphonic Band och i Borås Symfoniorkester.
        </Text>
        <Text mt="8">
            För att må bra så är det viktigt för mig röra mig ute i naturen
            antingen genom att springa orientering, plocka blåbär eller åka
            skidor. Senaste intresset är{' '}
            <Link href={'https://github.com/trueplu'} variant="yellow" mt="4">
                programmering
            </Link>{' '}
            och det är så och inte minst genom min son Samuel som denna sida
            blivit till. Stort tack!
        </Text>
        <Center>
            <PrimaryCTA />
        </Center>
    </Layout>
)

export default Om
