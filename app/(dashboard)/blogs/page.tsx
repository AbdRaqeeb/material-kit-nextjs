import { Metadata } from 'next';

import { Blogs } from '@/sections';

export const metadata: Metadata = {
    title: 'Blogs',
};

export default function BlogsPage() {
    return <Blogs />;
}
