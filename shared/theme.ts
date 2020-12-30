import { extendTheme } from '@chakra-ui/react'

const colors = {
    orange: '#F86624',
    green: '#61983B',
    blue: '#009EEA',
    white: '#FBFEF9',
    yellow: '#FFE156',
    black: '#000D0A',
}

export const theme = extendTheme({
    fonts: {
        body: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
        heading: `'Raleway', sans-serif`,
    },
    styles: {
        global: {
            'html, body': {
                color: colors.white,
            },
        },
    },
    colors,
    components: {
        Link: {
            baseStyle: {
                fontWeight: 'bold',
            },
            variants: {
                black: {
                    color: colors.black,
                },
                yellow: {
                    color: colors.yellow,
                },
                white: {
                    color: colors.white,
                },
            },
            defaultProps: {
                variant: 'black',
            },
        },
    },
})
