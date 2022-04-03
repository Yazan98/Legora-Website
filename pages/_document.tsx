import Document, { Head, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        const { html, head } = ctx.renderPage();
        return { html, head, ...initialProps };
    }

    render() {
        return (
            <html lang="en">
            <Head>
                <meta name="theme-color" content="#585ed6"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="robots" content="index, follow" />
                <meta key="googlebot" name="googlebot" content="index,follow" />
                <meta name="google" content="notranslate" />
                <meta name="author" content="Yazan Tarifi" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="keywords" content="Legora - is a Project Starter To Build Application with Several Languages, Frameworks, Libraries and Code Generator to Generate the Project With Ready Configuration" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="Legora" />
                <meta name="google-site-verification" content="Po9v_9xMO5UzA7eBfksNKj3oF3URDEAfh3bJJ3Po0M4" />
                <meta property="og:title" content="Legora - Project Starter - Code Generator" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="canonical" href="https://legora.me/" />
                <meta
                    property="og:description"
                    content="Legora - is a Project Starter To Build Application with Several Languages, Frameworks, Libraries and Code Generator to Generate the Project With Ready Configuration"
                />
                <meta property="og:url" content="https://legora.me/" />
                <meta
                    property="og:image"
                    content="https://legora.me/images/share-link.png"
                />
                <meta property="twitter:card" content="next-realworld" />
                <meta
                    property="twitter:url"
                    content="https://legora.me/"
                />
                <meta name="msapplication-TileColor" content="#000" />
                <meta
                    name="msapplication-TileImage"
                    content="/images/ms-icon-144x144.png"
                />
                <meta name="theme-color" content="#000" />
                <link
                    rel="apple-touch-icon"
                    sizes="57x57"
                    href="/images/apple-icon-57x57.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="60x60"
                    href="/images/apple-icon-60x60.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="72x72"
                    href="/images/apple-icon-72x72.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href="/images/apple-icon-76x76.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="114x114"
                    href="/images/apple-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    href="/images/apple-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="/images/apple-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="/images/apple-icon-152x152.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/images/apple-icon-180x180.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/images/android-icon-192x192.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/images/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="96x96"
                    href="/images/favicon-96x96.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/images/favicon-16x16.png"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `{
              "@context": "http://schema.org/",
              "@type": "Organization",
              "url": "https://legora.me/",
              "logo": "https://legora.me/images/share-link.png",
              "sameAs": [
                "https://legora.me"
              ],
            }`,
                    }}
                />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
            </html>
        );
    }
}

export default MyDocument;