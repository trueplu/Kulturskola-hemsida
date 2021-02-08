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
            Musiklärare Kulturskolan Borås. Berätta om mina mål med hemsidan och
            digital undervisning.
        </Text>
        <Center>
            <PrimaryCTA />
        </Center>
    </Layout>
)

export default Om
