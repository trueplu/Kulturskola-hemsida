import { Heading, Link, Text, Center } from '@chakra-ui/react'
import NextLink from 'next/link'

import Layout from '../../layouts/Layout'
import PrimaryCTA from '../../components/PrimaryCTA'
import Partners from '../../components/Partners'
import Image from 'next/image'

const Instrument = () => (
    <Layout maxW="xl" fontSize={[16, null, 20]}>
        <Heading textAlign="center">Instrument</Heading>
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
        <Text mt="2">
            Här finns moment att öva på för trumpet, valthorn och baryton.
            Notexempel hittar du i Dokument uppe i menyn och filmer där jag
            visar hur övningen går till hittar du i Videos.
        </Text>
        <Center>
            <PrimaryCTA href="/om">Länktext</PrimaryCTA>
            <PrimaryCTA href="/ovningar/trumpet-1">Trumpet 1</PrimaryCTA>
        </Center>
    </Layout>
)

export default Instrument
