import { Metadata } from 'next';

import { Products } from '@/sections';

export const metadata: Metadata = {
    title: 'Products',
};

export default function ProductsPage() {
    return <Products />;
}
