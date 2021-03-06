import { NextPage } from 'next';
import Head from 'next/head';
import { TypeSEO } from '../../model/seo.model';

const HTMLHeader: NextPage<TypeSEO> = ({ title, description }) => {
    return (
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="theme-color" content="#000000" />
            <meta property="title" content="Matheus Galhani" />
            <meta property="name" content="Matheus Galhani" />
            <meta name="description" content={description} />
            <meta property="url" content="https://matheusgalhani.com.br/" />

            <meta property="og:title" content="Matheus Galhani" />
            <meta property="og:image" content="/preview.png" />
            <meta property="og:description" content={description} />
            <meta property="og:locale" content="pt_BR" />
            <meta property="og:site_name" content="Matheus Galhani" />
            <meta property="og:url" content="https://matheusgalhani.com.br/" />
            <link rel="canonical" href="https://matheusgalhani.com.br/" />

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
            <title>{title}</title>
        </Head>
    );
};

export default HTMLHeader;
