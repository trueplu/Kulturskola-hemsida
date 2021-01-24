import { Heading, Link, Text, Center } from '@chakra-ui/react'
import NextLink from 'next/link'

import Layout from '../layouts/Layout'
import PrimaryCTA from '../components/PrimaryCTA'
import Partners from '../components/Partners'
import Image from 'next/image'

const About = () => (
    <Layout maxW="xl" fontSize={[16, null, 20]}>
        <Heading textAlign="center">Om mig</Heading>
        <Text>TODO: ersätt med bild på Fredrik</Text>
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
            Musiklärare Kulturskolan Borås. Berätta om dina mål med hemsidan och
            digital undervisning.
        </Text>
        <Center>
            <PrimaryCTA />
        </Center>
        <Center>
            <NextLink href="/" passHref>
                <Link variant="white" py="4">
                    Kom igång!
                </Link>
            </NextLink>
        </Center>
    </Layout>
)

export default About
