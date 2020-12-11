import { GridProps, Grid, Box, Text, Heading } from '@chakra-ui/react'
import Image, { ImageProps } from 'next/image'
import { FC } from 'react'

import Card from './Card'

const sides = {
    left: '2fr 3fr',
    right: '3fr 2fr',
}

interface IntroSectionProps extends GridProps {
    imageSide?: keyof typeof sides
    image: Pick<ImageProps, 'alt' | 'src'>
    heading: string
    content: React.ReactNode
}
const IntroSection: FC<IntroSectionProps> = ({
    imageSide = 'right',
    image,
    heading,
    content,
    ...props
}) => (
    <Grid
        fontSize="20px"
        width="100%"
        mb="20"
        p="4"
        gridTemplateColumns={sides[imageSide]}
        gap="4"
        {...props}
    >
        <Box p="4" order={imageSide === 'right' ? 1 : 0}>
            <Image width={300} height={300} {...image} />
        </Box>
        <Card textAlign="center">
            <Heading as="h2" size="lg" mb="6">
                {heading}
            </Heading>
            {content}
        </Card>
    </Grid>
)

export default IntroSection
