import { GridProps, Grid } from '@chakra-ui/react'
import { FC } from 'react'

const sides = {
    left: '2fr 3fr',
    right: '3fr 2fr',
}

interface IntroSectionProps extends GridProps {
    children: React.ReactNode
    imageSide?: keyof typeof sides
}
const IntroSection: FC<IntroSectionProps> = ({
    children,
    imageSide = 'right',
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
        {children}
    </Grid>
)

export default IntroSection
