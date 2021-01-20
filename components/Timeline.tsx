import { Box, Heading, Link, Text } from '@chakra-ui/react'
import { FC } from 'react'

import { email, formLink } from '../shared/constants'

interface TimelineItemProps {
    title: string
    children: React.ReactNode
    mb?: string
}
const TimelineItem: FC<TimelineItemProps> = ({ title, children }) => (
    <Box mb="8">
        <Heading as="h3" fontSize="xl" mt="4" mb="1">
            {`🌍 ${title}`}
        </Heading>
        {children}
    </Box>
)

const Timeline = () => (
    <Box mx="auto">
        <Heading as="h2" textAlign="center">
            Tidslinje
        </Heading>

        <TimelineItem title="Inlämning öppnar - 12 januari">
            <Text>Du skriver själv eller med dina vänner</Text>
        </TimelineItem>
        <TimelineItem title="Gratis event med Klimatprata - 21 januari">
            <Text>
                <Link
                    href="https://www.facebook.com/events/787787511805460"
                    isExternal
                    variant="yellow"
                >
                    Träning i Visionära klimatsamtal
                </Link>{' '}
                17:00-19:00
            </Text>
        </TimelineItem>
        <TimelineItem title="Gratis event med Klimatprata och Scenario 2030 - 2 februari">
            <Text>
                <Link
                    href="https://www.facebook.com/events/862486387653627"
                    isExternal
                    variant="yellow"
                >
                    Workshop: Hur ser en hållbar framtid ut och hur når vi dit?
                </Link>{' '}
                17:30-20:00
            </Text>
        </TimelineItem>
        <TimelineItem title="Inlämning stänger - 14 februari">
            <Text>
                Du bifogar och skickar in din novell/dikt i{' '}
                <Link href={formLink} isExternal variant="yellow">
                    formuläret
                </Link>
                . Max 2 st inskickade bidrag per person.
            </Text>
        </TimelineItem>
        <TimelineItem title="Publicering av textsamling - mars/april 2021">
            <Text>
                Ett urval av texterna sammanställs i en gemensam textsamling som
                publiceras via Klimatprata och FutureVisions.earth.
            </Text>
        </TimelineItem>
        <TimelineItem title="Läs, inspireras och nätverka - mars/april 2021">
            <Text>
                Alla utvalda texter publiceras i det sociala nätverket We Don’t
                Have Time. Läs, inspireras och dela dina framtidsvisioner med
                andra. Ta chansen att nätverka med andra unga framtidsvisionärer
                så vi tillsammans kan förverkliga våra visioner!
            </Text>
        </TimelineItem>
        <TimelineItem title="Mot framtiden!">
            <Text>
                Har du idéer och vill engagera dig mer?{' '}
                <Link href={`mailto:${email}`} variant="yellow">
                    Hör av dig!
                </Link>
            </Text>
        </TimelineItem>
    </Box>
)

export default Timeline
