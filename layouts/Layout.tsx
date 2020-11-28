import Head from 'next/head'
import { Container } from '@chakra-ui/react'

import Header from '../components/Header'

export interface LayoutProps {
    children: React.ReactNode
    meta?: MetaProps
}

interface MetaProps {
    title?: string
    description?: string
}

const defaultMeta = {
    title: 'FutureVisions.earth 🌍',
    description: '',
}

export default function Layout({ children, meta = {} }: LayoutProps) {
    const { title, description } = {
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
                <meta name="description" content={description}></meta>
                <title>{title}</title>
            </Head>
            <Header />
            <Container mt="8" maxW="xl" bg="teal.50">
                {children}
            </Container>
        </>
    )
}
