import { Button, Center, Heading } from '@chakra-ui/react'
import NextLink from 'next/link'

import Layout from '../layouts/Layout'

const Index = () => {
    return (
        <>
            <Layout>
                <Center flexDirection="column">
                    <Heading>Klimatnytt.org</Heading>

                    <NextLink
                        href="https://campaigns.wedonthavetime.org/b%C3%B6rja-med-regelbundna-presskonferenser-om-klimatkrisen-8a3d4ab0-03e0-4fa1-b723-1ee33539a9d5"
                        passHref
                    >
                        <Button mt="4" as="a" target="_blank" rel="noopener">
                            Engagera dig
                        </Button>
                    </NextLink>
                </Center>
            </Layout>
        </>
    )
}

export default Index
