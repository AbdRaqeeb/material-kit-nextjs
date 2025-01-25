import { Metadata } from 'next';

import { Login } from '@/sections';

export const metadata: Metadata = {
    title: 'Login',
    description: 'Provide your credentials to access the dashboard',
};

export default function LoginPage() {
    return <Login />;
}
