import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    fonts: {
        body: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
        heading: `'Raleway', sans-serif`,
    },
    styles: {
        global: {
            'html, body': {
                color: '#FBFEF9',
            },
        },
    },
})
