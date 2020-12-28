import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

import Header from '../components/Header'

export interface LayoutProps {
    children: React.ReactNode
    meta?: MetaProps
}

interface MetaProps {
    title?: string
    description?: string
    image?: {
        url: string
        alt: string
    }
}

const defaultMeta = {
    title: '🌍 FutureVisions.earth',
    description:
        'Är du en ung framtidsvisionär? Tillsammans utforskar vi vår kreativitet och skriver om den framtid vi vill kämpa för. Välkommen oavsett om du är kunnig och van att skriva - eller om du är nyfiken och vill lära dig mer!',
    image: {
        url: '/images/FVE-logo.png',
        alt: 'FutureVisions.earth logo',
    },
}

export default function Layout({ children, meta = {} }: LayoutProps) {
    const { title, description, image } = {
        ...defaultMeta,
        ...meta,
    }
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta property="og:title" content={title} />
                <meta name="description" content={description} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image.url} />
                <meta property="og:image:alt" content={image.alt} />
                <meta property="og:url" content="https://futurevisions.earth" />
                <meta property="og:type" content="website" />
            </Head>
            <Box
                sx={{
                    background: 'transparent',
                    backgroundImage: 'linear-gradient(25deg, #61983b, #009eea)',
                    backgroundSize: 'cover',
                    backgroundPosition: '50%',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                    width: '100%',
                    minHeight: '100vh',
                }}
            >
                <Header />
                <Container mt="8" maxW="xl">
                    {children}
                </Container>
            </Box>
        </>
    )
}
