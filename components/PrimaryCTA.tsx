import NextLink from 'next/link'
import { Button } from '@chakra-ui/react'

import { formLink } from '../shared/constants'

const PrimaryCTA = () => (
    <NextLink href={formLink} passHref>
        <Button
            size="lg"
            mt="8"
            as="a"
            target="_blank"
            rel="noopener"
            color="black"
            bg="#ffe156"
            transition="none"
            _hover={{
                bg: '#FFD20A',
            }}
            _pressed={{
                bg: '#F5C800',
            }}
            _active={{
                bg: '#F5C800',
            }}
        >
            Skicka in ditt bidrag!
        </Button>
    </NextLink>
)

export default PrimaryCTA
