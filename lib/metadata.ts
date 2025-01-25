import { CONFIG } from '@/constants';
import type { Metadata } from 'next/types';
import { env } from '@/constants';

export function createMetadata(override: Metadata): Metadata {
    return {
        ...override,
        openGraph: {
            title: override.title ?? undefined,
            description: override.description ?? undefined,
            url: env.baseUrl,
            images: CONFIG.appLogo,
            siteName: CONFIG.appName,
            ...override.openGraph,
        },
        twitter: {
            card: 'summary_large_image',
            title: override.title ?? undefined,
            description: override.description ?? undefined,
            images: CONFIG.appLogo,
            ...override.twitter,
        },
        metadataBase: override.metadataBase ?? new URL(env.baseUrl),
    };
}
