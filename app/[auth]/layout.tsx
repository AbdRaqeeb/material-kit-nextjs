'use client';
import { ReactNode, Suspense } from 'react';
import { AuthLayout } from '@/layouts/auth';
import { Fallback } from '@/components';

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <AuthLayout>
            <Suspense fallback={<Fallback />}>{children}</Suspense>
        </AuthLayout>
    );
}
