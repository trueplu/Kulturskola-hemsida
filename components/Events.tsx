import { Text, Link, Heading, Box } from '@chakra-ui/react'

import Card from './Card'

const Organizers = {
    Klimatprata: 'Vardagens civilkurage, genom projektet Klimatprata',
}

const events = [
    {
        title: 'Träning i visionära klimatsamtal',
        when: 'Torsdag, 21 januari kl. 17:00-19:00',
        organizer: Organizers.Klimatprata,
        link: 'https://www.facebook.com/events/787787511805460',
    },
]

const Events = () => (
    <>
        <Card mx="auto" my="20" pt="4" px="2" pb="2">
            <Heading textAlign="center" mb="2">
                Kommande event
            </Heading>
            {events.map((e, i) => (
                <Link href={e.link} isExternal>
                    <Box
                        key={e.link + i}
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
                        <Text mt="2">När: {e.when}</Text>
                        <Text>Arrangör: {e.organizer}</Text>
                    </Box>
                </Link>
            ))}
        </Card>
    </>
)

export default Events
