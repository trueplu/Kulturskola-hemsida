import { Heading, Link, Text, Center } from '@chakra-ui/react'

import Layout from '../layouts/Layout'
import PrimaryCTA from '../components/PrimaryCTA'

const About = () => (
    <Layout maxW="xl" fontSize={[16, null, 20]}>
        <Heading>Om oss</Heading>
        <Text mt="2">
            FutureVisions.earth startades av{' '}
            <Link
                href="https://www.instagram.com/josefinbolander/"
                rel="noopener"
                target="_blank"
                variant="yellow"
            >
                Josefin Bolander
            </Link>{' '}
            och{' '}
            <Link
                href="https://samuelplumppu.se"
                rel="noopener"
                target="_blank"
                variant="yellow"
            >
                Samuel Plumppu
            </Link>{' '}
            hösten 2020 för att lyfta berättelser och samtal om en hållbar
            framtid. Målet är att inspirera fler unga framtidsvisionärer med
            hjälp av kreativitet och den berättande kraften.
        </Text>

        <Text mt="8">
            FutureVisions.earth finns för att komplettera den växande cli-fi
            genren och dess dystopiska influenser med visionära och positiva
            berättelser. Vi anser att unga behöver kunna föreställa sig en bra
            framtid där vi skapat en hållbar värld för att känna hopp och agera
            nu under det avgörande 2020-talet. Därför bjuder vi in alla som vill
            vara med och utforska framtidsvisioner. Häng med så skriver vi
            framtidshistoria!
        </Text>
        <Center>
            <PrimaryCTA />
        </Center>
    </Layout>
)

export default About
