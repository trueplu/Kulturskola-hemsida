import {
    Box,
    Center,
    Heading,
    ListItem,
    Text,
    Link,
    UnorderedList,
} from '@chakra-ui/react'

import Card from '../components/Card'
import IntroSection from '../components/IntroSection'
import PrimaryCTA from '../components/PrimaryCTA'
import Layout from '../layouts/Layout'
import Divider from '../components/Divider'

import { theme } from '../shared/theme'
import { getStartedId } from '../shared/constants'

/*

index
- startsida ✅
    - förklarande text på om hemsidan ✅
- dokument
    - lista alla dokument ✅
    - håll dokument uppdaterade över tid ✅
- lista blogginlägg
    - kategorier
    - spara exempel som går att kopiera


ks.plumppumusik.se/trumpet/lektion
ks.plumppumusik.se/horn/lektion

ks.plumppumusik.se
    /trumpet
        /moment-1
    /horn
    /orkester
    /baryton


*/

const Index = () => {
    return (
        <>
            <Layout>
                <Center flexDirection="column" textAlign="center" mb="20">
                    <Heading
                        as="h1"
                        fontSize={['16px', null, '18px']}
                        textTransform="uppercase"
                        letterSpacing=".1rem"
                        fontWeight="light"
                        fontFamily={theme.fonts.body}
                    >
                        Lär dig spela <br />
                        <Box
                            as="span"
                            fontSize={['34px', '50px', '60px']}
                            textTransform="none"
                            letterSpacing="none"
                            fontWeight="bold"
                            fontFamily={theme.fonts.heading}
                        >
                            Brassinstrument
                        </Box>
                    </Heading>

                    <Text mt="4" mb="4" fontSize={['lg', null, null, 'xl']}>
                        Vilken framtid vill du leva i och hur gör vi för att nå
                        dit?
                    </Text>

                    <PrimaryCTA />
                </Center>

                <Box maxW="4xl" mt="20" mx="auto">
                    <IntroSection
                        imageSide="left"
                        image={{
                            src: '/images/undraw_new_ideas_jdea.svg',
                            alt:
                                'Woman holding out her hand with a large lightbulb to represent new ideas',
                            priority: true,
                        }}
                        heading="Nyfiken på att spela brassinstrument?"
                        content={
                            <Text>
                                (Kort text om varför spela brassinstrument)
                                Utforska din kreativitet och skriv om den värld
                                du vill kämpa för. Välkommen att delta oavsett
                                om du är van skribent eller bara nyfiken!
                            </Text>
                        }
                    />

                    <IntroSection
                        imageSide="right"
                        image={{
                            src: '/images/undraw_dream_world_cin1.svg',
                            alt:
                                'Woman planting seeds that grow into a dream world',
                            priority: true,
                        }}
                        heading="Digitala lektioner - hur går det till?"
                        textAlign="left"
                        content={
                            <UnorderedList>
                                <ListItem>
                                    Hitta nya moment och övningar här på
                                    hemsidan.
                                </ListItem>
                                <ListItem>
                                    Se videoklipp, läs instruktionerna och öva i
                                    din egen takt.
                                </ListItem>
                                <ListItem>
                                    Gå igenom på nästa lektion. Välkommen att
                                    höra av dig om du behöver hjälp!
                                </ListItem>
                            </UnorderedList>
                        }
                    />

                    <Divider id={getStartedId} />

                    {/* <Heading
                        as="h2"
                        textAlign="center"
                        fontSize={['40px', '50px', '60px']}
                    >
                        Instrument
                    </Heading> */}

                    <Heading
                        as="h2"
                        fontSize={['16px', null, '18px']}
                        textTransform="uppercase"
                        letterSpacing=".1rem"
                        fontWeight="light"
                        textAlign="center"
                        fontFamily={theme.fonts.body}
                    >
                        Välj ditt <br />
                        <Box
                            as="span"
                            fontSize={['34px', '50px', '60px']}
                            textTransform="none"
                            letterSpacing="none"
                            fontWeight="bold"
                            fontFamily={theme.fonts.heading}
                        >
                            Instrument
                        </Box>
                    </Heading>

                    <IntroSection
                        imageSide="left"
                        image={{
                            src: '/images/undraw_inspiration_lecl.svg',
                            alt: 'Man finding inspiration',
                        }}
                        heading="Noveller och dikter för framtiden"
                        content={
                            <>
                                <Text>
                                    Sätt ord på dina tankar och känslor! Hur får
                                    framtiden dig att känna? Vad ser du fram
                                    emot? Hur vill du leva i framtiden? Hur gör
                                    vi för att nå en hållbar framtid?
                                </Text>
                            </>
                        }
                    />

                    <IntroSection
                        imageSide="right"
                        image={{
                            src: '/images/undraw_thought_process_67my.svg',
                            alt:
                                'Man brainstorming, thinking and organizing new ideas',
                        }}
                        heading="För vem?"
                        content={
                            <Text>
                                Skrivprojektet är till för dig mellan 15 till 25
                                år som vill dela dina framtidsvisioner och
                                inspirera fler till att engagera sig för en
                                hållbar framtid.
                            </Text>
                        }
                    />

                    <Card mx="auto" textAlign="center">
                        <Text fontWeight="bold" fontSize="2xl">
                            Så, vilken framtid vill du leva i och hur gör vi för
                            att nå dit?
                        </Text>

                        <Text mt="8" fontSize="20px">
                            Skicka in ditt bidrag senast den 14 februari för en
                            chans att bli publicerad i en gemensam textsamling -
                            fylld av inspiration och framtidshopp. De utvalda
                            texterna kommer att publiceras hos våra
                            samarbetspartners{' '}
                            <Link
                                href="https://klimatprata.se"
                                isExternal
                                _hover={{
                                    textDecoration: 'underline !important',
                                }}
                            >
                                Klimatprata
                            </Link>{' '}
                            och{' '}
                            <Link
                                href="https://wedonthavetime.org/our-community?futurevisions.earth"
                                rel="noopener"
                                target="_blank"
                                _hover={{
                                    textDecoration: 'underline !important',
                                }}
                            >
                                We Don't Have Time
                            </Link>
                            . Alla texter kan läsas gratis.
                        </Text>

                        <Center>
                            <PrimaryCTA mb="4" />
                        </Center>
                    </Card>
                </Box>
            </Layout>
        </>
    )
}

export default Index
