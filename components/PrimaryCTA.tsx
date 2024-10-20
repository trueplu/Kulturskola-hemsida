'use client'

import { FC } from 'react'
import { LinkProps } from 'next/link'
import { Button, ButtonProps } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'

import { getStartedLink } from '../shared/constants'

interface PrimaryCTAProps extends ButtonProps {
    href?: LinkProps['href']
}

const PrimaryCTA: FC<PrimaryCTAProps> = ({
    href = getStartedLink,
    children = 'Kom igång!',
    ...props
}) => (
    <Link href={href}>
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
            {children}
        </Button>
    </Link>
)

export default PrimaryCTA
