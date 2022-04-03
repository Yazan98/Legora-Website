import React from 'react';
import Head from 'next/head'

export default function LegoraLayout({ children, title, description }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, user-scalable=no" />
            </Head>
            {children}
        </div>
    );
}