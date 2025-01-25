import { Metadata } from 'next';

import { NotFound } from '@/sections';

export const metadata: Metadata = {
    title: 'Page Not Found',
};

export default function NotFoundPage() {
    return <NotFound />;
}
