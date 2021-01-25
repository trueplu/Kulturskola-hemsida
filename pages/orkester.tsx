import { Heading, Link, Text, Center } from '@chakra-ui/react'
import NextLink from 'next/link'

import Layout from '../layouts/Layout'
import PrimaryCTA from '../components/PrimaryCTA'
import Partners from '../components/Partners'
import Image from 'next/image'

const Orkester = () => (
    <Layout maxW="xl" fontSize={[16, null, 20]}>
        <Heading textAlign="center">Orkester</Heading>
        <Center>
            <Image
                src="/images/Baryton.jpg"
                alt="Fredrik sitting in a circle of baritones holding a trumpet"
                priority
                loading="eager"
                width={250}
                height={250}
            />
        </Center>
        <Text mt="2">orkester orkester orkester</Text>
        <Center>
            <PrimaryCTA />
        </Center>
    </Layout>
)

export default Orkester
