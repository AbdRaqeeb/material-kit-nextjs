import { ReactNode } from 'react';
import type { Metadata } from 'next';

import './globals.css';
import { CONFIG } from '@/constants';
import { ClientThemeWrapper } from './client-wrapper';
import { createMetadata } from '@/lib';

export const metadata = createMetadata({
    title: {
        template: `%s | ${CONFIG.appName}`,
        default: CONFIG.appName,
    },
    description:
        'The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI ©, ready to be customized to your style',
    keywords: 'react,material,kit,application,dashboard,admin,template',
});

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang='en'>
            <body>
                <ClientThemeWrapper>{children}</ClientThemeWrapper>
            </body>
        </html>
    );
}
