import { Heading, Link, Text, Center } from '@chakra-ui/react'
import NextLink from 'next/link'

import Layout from '../layouts/Layout'
import PrimaryCTA from '../components/PrimaryCTA'
import Partners from '../components/Partners'
import Image from 'next/image'

const About = () => (
    <Layout maxW="xl" fontSize={[16, null, 20]}>
        <Heading>Om oss</Heading>
        <Center>
            <Image
                src="/images/undraw_new_ideas_jdea.svg"
                alt="Woman holding out her hand with a large lightbulb to represent new ideas"
                priority
                loading="eager"
                width={250}
                height={250}
            />
        </Center>
        <Text mt="2">
            FutureVisions.earth startades hösten 2020 för att lyfta berättelser
            och samtal om en hållbar framtid. Målet är att inspirera fler unga
            framtidsvisionärer med hjälp av kreativitet och den berättande
            kraften.
        </Text>

        <Text mt="4">
            Den växande cli-fi genren inom litteratur och film har hittills gett
            mycket plats åt dystopier, vilket riskerar att leda till passivitet.
            FutureVisions.earth finns för att lyfta visionära och positiva
            berättelser som inspirerar till förändring.
        </Text>

        <Text mt="4">
            Vi tror att vi unga behöver föreställa oss en bra framtid där vi har
            lyckats skapa en hållbar värld för att känna hopp och kraft att
            agera nu under det avgörande 2020-talet. Därför bjuder vi in alla
            som vill vara med och utforska framtidsvisioner. Häng med så skriver
            vi framtidshistoria!
        </Text>
        <Center>
            <PrimaryCTA />
        </Center>
        <Center>
            <NextLink href="/">
                <Link variant="white" py="4">
                    Läs mer
                </Link>
            </NextLink>
        </Center>

        <Partners pt="20" />
    </Layout>
)

export default About
