import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { StrictMode } from 'react'
import 'focus-visible/dist/focus-visible'

import MDXProvider from '../components/MDXProvider'
import { theme } from '../shared/theme'
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => (
    <StrictMode>
        <MDXProvider>
            <ChakraProvider theme={theme}>
                <CSSReset />
                <Component {...pageProps} />
            </ChakraProvider>
        </MDXProvider>
    </StrictMode>
)

export default App
