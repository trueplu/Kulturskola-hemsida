import { Text, Link, Heading, Box } from '@chakra-ui/react'

import Card from './Card'

const Organizers = {
    Klimatprata: 'Vardagens civilkurage, genom projektet Klimatprata',
}

interface FutureVisionsEvent {
    title: string
    when: string
    date: string
    organizer: keyof typeof Organizers
    link: string
}

const events: FutureVisionsEvent[] = [
    {
        title: 'Träning i visionära klimatsamtal',
        when: 'Torsdag, 21 januari kl. 17:00-19:00',
        date: '2021-01-21T16:00:00.0Z',
        organizer: 'Klimatprata',
        link: 'https://www.facebook.com/events/787787511805460',
    },
]

const keepUpcomingEvents = (event: FutureVisionsEvent) =>
    Date.now() <= new Date(event.date).getTime()

const Events = () => {
    const upcomingEvents = events.filter(keepUpcomingEvents)
    return upcomingEvents.length ? (
        <>
            <Card mx="auto" my="20" pt="4" px="2" pb="2">
                <Heading textAlign="center" mb="2">
                    Kommande event
                </Heading>
                {events.map((e, i) => (
                    <Link href={e.link} isExternal key={e.link + i}>
                        <Box
                            borderRadius="lg"
                            p="4"
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
                                    {Organizers[e.organizer]}
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
