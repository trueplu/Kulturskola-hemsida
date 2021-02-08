import { Heading, Text, Center } from '@chakra-ui/react'
import Image from 'next/image'

import Layout from '../../layouts/Layout'
import Exercises from '../../components/Exercises'

const Ovningar = () => (
    <Layout maxW="xl" fontSize={[16, null, 20]}>
        <Heading textAlign="center" mb="8">
            Övningar
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
        <Text>
            Här finns moment att öva på för trumpet, valthorn och baryton.
            Notexempel hittar du i Dokument uppe i menyn och filmer där jag
            visar hur övningen går till hittar du i Videos.
        </Text>

        <Exercises type="Trumpet" />
        <Exercises type="Valthorn" />
        <Exercises type="Baryton/Tuba" />
    </Layout>
)

export default Ovningar
