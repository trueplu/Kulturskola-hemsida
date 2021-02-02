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
import { getStartedId, email } from '../shared/constants'

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
                        Välkommen du som redan är elev eller du som vill börja
                        spela ett brassinstrument.
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
                                Trumpet, valthorn, baryton, tuba och trombon är
                                de valigaste brassinstrumenten du kan spela på
                                Borås Kulturskola. Undervisningen sker både i
                                Fristad musikskola, Borås Kulturskola i
                                Simonsland och ute på grundskolor i Borås stad.
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
                                    Gå igenom på nästa lektion.{' '}
                                    <Link href={'mailto:' + email}>
                                        Välkommen att höra av dig om du behöver
                                        hjälp!
                                    </Link>
                                </ListItem>
                            </UnorderedList>
                        }
                    />

                    <Divider id={getStartedId} />

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
                        heading="Trumpet"
                        content={
                            <>
                                <Text>
                                    Som alla vet är trumpet det finaste
                                    instrumentet av dem alla. PUNKT!
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
                        heading="Baryton"
                        content={
                            <Text>
                                Baryton är en riktig pärla bland
                                brassinstrumenten. Lillebror till bastuban och
                                har ofta solostämman i traditionell
                                blåsorkester.
                            </Text>
                        }
                    />

                    <IntroSection
                        imageSide="left"
                        image={{
                            src: '/images/undraw_thought_process_67my.svg',
                            alt:
                                'Man brainstorming, thinking and organizing new ideas',
                        }}
                        heading="Trombon"
                        content={
                            <Text>Trombonen är ett instrument med drag i.</Text>
                        }
                    />

                    <IntroSection
                        imageSide="right"
                        image={{
                            src: '/images/undraw_thought_process_67my.svg',
                            alt:
                                'Man brainstorming, thinking and organizing new ideas',
                        }}
                        heading="Valthorn"
                        content={<Text>Kix!</Text>}
                    />

                    <IntroSection
                        imageSide="left"
                        image={{
                            src: '/images/undraw_thought_process_67my.svg',
                            alt:
                                'Man brainstorming, thinking and organizing new ideas',
                        }}
                        heading="Bastuba"
                        content={
                            <Text>
                                Fundamentet för hela vårt musicerande. Det var
                                detta J.S. Bach drömde om men inte riktigt kunde
                                få ur sig. I stället skrev han mängder av musik
                                för orgel när han kunnat skriva den direkt för
                                brassensemble. Sicken klåpare. ;.D
                            </Text>
                        }
                    />

                    <Card mx="auto" textAlign="center">
                        <Text fontWeight="bold" fontSize="2xl">
                            Hur gör jag för att anmäla mig?
                        </Text>

                        <Text mt="8" fontSize="20px">
                            Läs mer om hur det är att vara elev i kulturskolan
                            och anmäl dig här{' '}
                            <Link
                                href="https://www.boras.se/utbildningochforskola/boraskulturskola.4.461763c21582ce0434ba484b.html"
                                isExternal
                                _hover={{
                                    textDecoration: 'underline !important',
                                }}
                            >
                                Borås Kulturskolas hemsida
                            </Link>{' '}
                            och{' '}
                            <Link
                                href="https://open24.ist-asp.com/boras/musik/Musik/Start"
                                rel="noopener"
                                target="_blank"
                                _hover={{
                                    textDecoration: 'underline !important',
                                }}
                            >
                                Anmälningssida
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
