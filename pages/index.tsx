import {
    Box,
    Button,
    Center,
    Divider,
    Heading,
    ListItem,
    Text,
    Link,
    UnorderedList,
    background,
} from '@chakra-ui/react'
import NextLink from 'next/link'

import Layout from '../layouts/Layout'

const formLink = 'https://forms.gle/piqQmfycXCBam4c18'
const email = 'futurevisions.earth@gmail.com'

const Index = () => {
    return (
        <>
            <Layout>
                <Center flexDirection="column">
                    <Heading as="h1">FutureVisions.earth 🌍</Heading>

                    <Text mt="4">
                        Vilken framtid vill du leva i och hur gör vi för att nå
                        dit?
                    </Text>

                    <NextLink href={formLink} passHref>
                        <Button
                            mt="8"
                            as="a"
                            target="_blank"
                            rel="noopener"
                            color="white"
                            bg="teal.600"
                            transition="none"
                            _hover={{
                                bg: 'teal.700',
                            }}
                            _pressed={{
                                bg: 'teal.800',
                            }}
                            _active={{
                                bg: 'teal.800',
                            }}
                        >
                            Skicka in ditt bidrag!
                        </Button>
                    </NextLink>
                </Center>

                <Box maxW="xl" mt="8" mx="auto">
                    <Text>
                        Det här är ett kreativt projekt för unga
                        framtidsvisionärer. Tillsammans utforskar vi vår
                        kreativitet och skriver om den framtid vi vill kämpa
                        för. Välkommen oavsett om du är kunnig och van att
                        skriva - eller om du är nyfiken och vill lära dig mer!
                    </Text>
                    <Box mt="4">
                        <Heading as="h2" size="lg">
                            För vem?
                        </Heading>
                        <Text>
                            Projektet är till för dig mellan 15 till 25 år som
                            vill bidra med dina framtidsvisioner och inspirera
                            fler till att engagera sig för en hållbar framtid.
                        </Text>
                    </Box>
                    <Box mt="8">
                        <Heading as="h2" size="lg">
                            Noveller och dikter för framtiden
                        </Heading>
                        <Text>
                            Genom att skriva om framtiden får du möjlighet att
                            sätta ord på dina tankar och känslor. Vad ser du
                            fram emot? Vilken framtid vill du leva i? Hur gör vi
                            för att nå dit? Tio bidrag som skickats in senast
                            den 14 februari kommer att väljas ut till en
                            textsamling fylld av inspiration och framtidshopp.
                            Texterna publiceras hos Klimatprata och
                            samarbetspartners och kan läsas gratis.
                        </Text>
                    </Box>
                    <Box mt="8">
                        <Heading as="h2" size="lg">
                            Varför ska du delta i projektet?
                        </Heading>
                        <UnorderedList>
                            <ListItem>Hopp om framtiden</ListItem>
                            <ListItem>Gemenskap</ListItem>
                            <ListItem>
                                Chans att din dikt eller novell blir publicerad
                            </ListItem>
                        </UnorderedList>
                    </Box>

                    <Text fontWeight="bold" mt="8" textAlign="center">
                        Så, vilken framtid vill du leva i och hur gör vi för att
                        nå dit?
                    </Text>
                </Box>

                <Divider maxW="xs" my="8" mx="auto" />

                <Box maxW="xl" mx="auto">
                    <Heading as="h2" size="lg">
                        Hur går det till?
                    </Heading>
                    <UnorderedList>
                        <ListItem>
                            Du skriver själv, eller med dina vänner
                        </ListItem>
                        <ListItem>
                            Du bifogar och skickar in din novell eller dikt i{' '}
                            <Link href={formLink} isExternal>
                                formuläret
                            </Link>
                        </ListItem>
                        <ListItem>
                            Författaren håller och äger rätten till sin text,
                            men genom att skicka in texten godkänner du att vi
                            publicerar den.
                        </ListItem>
                        <ListItem>
                            Max 2 st inskickade bidrag per person.
                        </ListItem>
                        <ListItem>
                            Har du några frågor, hör av dig till{' '}
                            <Link href={'mailto:' + email}>{email}</Link>
                        </ListItem>
                    </UnorderedList>
                </Box>
            </Layout>
        </>
    )
}

export default Index
