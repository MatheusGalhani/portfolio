import { NextPage } from 'next';
import Head from 'next/head';

const HTMLHeader: NextPage = () => {
    return (
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="Matheus Galhani" />
            <link rel="apple-touch-icon" href="/logo192.png" />
            <link
                rel="icon"
                type="image/png"
                sizes="192x192"
                href="/192x192.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="512x512"
                href="/512x512.png"
            />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            <title>
                Matheus Galhani | Portfolio | Desenvolvedor Full Stack
            </title>
            <meta property="og:title" content="Matheus Galhani" />
            <meta property="og:image" content="/preview.png" />
            <meta
                property="og:description"
                content="Matheus Galhani - Desenvolvedor Full Stack."
            />
            <link rel="canonical" href="https://matheusgalhani.com.br/" />
        </Head>
    );
};

export default HTMLHeader;
