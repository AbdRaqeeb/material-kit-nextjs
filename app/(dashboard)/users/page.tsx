import { Metadata } from 'next';

import { Users } from '@/sections';

export const metadata: Metadata = {
    title: 'Users',
};

export default function UsersPage() {
    return <Users />;
}
