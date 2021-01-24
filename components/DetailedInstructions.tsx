import { FC } from 'react'
import {
    Box,
    BoxProps,
    Heading,
    ListItem,
    Text,
    Link,
    UnorderedList,
} from '@chakra-ui/react'

import { getStartedLink, email } from '../shared/constants'
import Divider from './Divider'

export interface DetailedInstructionsProps extends BoxProps {}

const DetailedInstructions: FC<DetailedInstructionsProps> = (props) => (
    <Box {...props}>
        <Box maxW="xl" mx="auto">
            <Heading as="h2" size="xl" textAlign="center" mb="2">
                Hur går det till?
            </Heading>
            <UnorderedList>
                <ListItem>Du skriver själv, eller med dina vänner</ListItem>
                <ListItem>
                    Du bifogar och skickar in din novell eller dikt i{' '}
                    <Link href={getStartedLink} isExternal variant="yellow">
                        formuläret
                    </Link>
                </ListItem>
                <ListItem>
                    Författaren{' '}
                    <Link
                        href="https://skrivguiden.se/publicering/upphovsratt/"
                        isExternal
                        variant="yellow"
                    >
                        äger och håller rätten till sin text
                    </Link>
                    , men genom att skicka in texten godkänner du att vi
                    publicerar den.
                </ListItem>
                <ListItem>Max 2 st inskickade bidrag per person.</ListItem>
                <ListItem>
                    Har du några frågor, hör av dig till{' '}
                    <Link href={'mailto:' + email} variant="yellow">
                        {email}
                    </Link>
                </ListItem>
            </UnorderedList>
        </Box>

        <Box maxW="xl" mt="8" mx="auto">
            <Heading as="h2" size="xl" textAlign="center" mb="2">
                Format för novell och dikt
            </Heading>
            <UnorderedList>
                <ListItem>Times New Roman typsnitt 12</ListItem>
                <ListItem>Språk: Svenska</ListItem>
                <ListItem>Max 1250 ord</ListItem>
            </UnorderedList>
        </Box>

        <Divider />

        <Box maxW="xl" mx="auto">
            <Text>
                <Text fontWeight="bold" as="span">
                    Restriktioner:{' '}
                </Text>
                Novellen/dikten får inte vara publicerad sedan tidigare i varken
                tryckt eller digitalt format. Den som lämnar in försäkrar sig om
                att hen skrivit novellen/dikten. Max 2 bidrag per person.
            </Text>
            <Text mt="4">
                <Text fontWeight="bold" as="span">
                    Rättigheter:{' '}
                </Text>
                Genom att skicka in novellen eller dikten får
                FutureVisions.earth ditt godkännande att publicera texten i sina
                kanaler, hos samarbetspartners och i tryck. Ditt namn/pseudonym
                kommer att publiceras med texten.{' '}
            </Text>
            <Text mt="4">
                Författaren äger och håller rätten till sin text
                (Upphovsrättslagen). Genom att skicka in ditt bidrag godkänner
                du att FutureVisions.earth publicerar din text.
                FutureVisions.earth har som syfte att sprida inspiration och
                gemenskap bland ungdomar. Texterna som skickas in kommer att
                vara gratis att läsa.
            </Text>
        </Box>
    </Box>
)

export default DetailedInstructions
