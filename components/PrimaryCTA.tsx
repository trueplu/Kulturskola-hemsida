import { FC } from 'react'
import NextLink from 'next/link'
import { Button, ButtonProps } from '@chakra-ui/react'

import { getStartedLink } from '../shared/constants'

const PrimaryCTA: FC<ButtonProps> = ({ href = getStartedLink, ...props }) => (
    <NextLink href={href} passHref>
        <Button
            size="lg"
            mt="8"
            as="a"
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
            {...props}
        >
            Kom igång!
        </Button>
    </NextLink>
)

export default PrimaryCTA
