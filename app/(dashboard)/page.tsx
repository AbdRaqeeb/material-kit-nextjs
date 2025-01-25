import { Metadata } from 'next';

import { Overview } from '@/sections';

export const metadata: Metadata = {
    title: 'Dashboard',
};

export default function OverviewPage() {
    return <Overview />;
}
