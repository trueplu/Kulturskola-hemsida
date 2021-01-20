import { Text, Link, Heading, Box } from '@chakra-ui/react'
import NextLink from 'next/link'

import Card from './Card'

interface FutureVisionsEvent {
    title: string
    when: string
    date: string
    organizer: string
    link: string
}

const events: FutureVisionsEvent[] = [
    {
        title: 'Träning i visionära klimatsamtal',
        when: 'Torsdag, 21 januari kl. 17:00-19:00',
        date: '2021-01-21T16:00:00.0Z',
        organizer: 'Vardagens civilkurage, genom projektet Klimatprata',
        link: 'https://www.facebook.com/events/787787511805460',
    },
    {
        title: 'Workshop: Hur ser en hållbar framtid ut och hur når vi dit?',
        when: 'Tisdag, 2 februari kl. 17:30-19:30',
        date: '2021-02-02T16:30:00.0Z',
        organizer: 'Klimatprata, Scenario 2030',
        link: 'https://www.facebook.com/events/862486387653627',
    },
]

const keepUpcomingEvents = (event: FutureVisionsEvent) =>
    Date.now() <= new Date(event.date).getTime()

const Events = () => {
    const upcomingEvents = events.filter(keepUpcomingEvents)
    return upcomingEvents.length ? (
        <>
            <Card mx="auto" my="20" p="2">
                <Heading textAlign="center" my="2">
                    Kommande event
                </Heading>
                <Text p="4" pt="0">
                    <NextLink href="/about" passHref>
                        <Link>FutureVisions.earth</Link>
                    </NextLink>{' '}
                    är med och arrangerar. Välkommen att anmäla dig via länkarna
                    nedan!
                </Text>
                {upcomingEvents.map((e, i) => (
                    <Link href={e.link} isExternal key={e.link + i}>
                        <Box
                            borderRadius="lg"
                            p={['4', null, null, '5']}
                            style={{
                                textDecoration: 'none !important',
                            }}
                            _hover={{
                                cursor: 'pointer',
                                backgroundImage:
                                    'linear-gradient(25deg,#009eea,#fff)',
                            }}
                            position="relative"
                        >
                            <Heading as="h3" fontSize="md" pr="4">
                                📅 {e.title}
                            </Heading>
                            <Text position="absolute" top="4" right="4">
                                →
                            </Text>
                            <Text mt="2">
                                När:{' '}
                                <Text as="span" fontWeight="normal">
                                    {e.when}
                                </Text>{' '}
                            </Text>
                            <Text>
                                Arrangör:{' '}
                                <Text as="span" fontWeight="normal">
                                    {e.organizer}
                                </Text>{' '}
                            </Text>
                        </Box>
                    </Link>
                ))}
            </Card>
        </>
    ) : null
}

export default Events
