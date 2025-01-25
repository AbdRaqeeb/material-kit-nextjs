import { Metadata } from 'next';

import { Register } from '@/sections';

export const metadata: Metadata = {
    title: 'Register',
    description: 'Create an account',
};

export default function RegisterPage() {
    return <Register />;
}
