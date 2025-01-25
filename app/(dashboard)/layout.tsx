import { ReactNode, Suspense } from 'react';
import { DashboardLayout } from '@/layouts/dashboard';
import { Fallback } from '@/components';

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <DashboardLayout>
            <Suspense fallback={<Fallback />}>{children}</Suspense>
        </DashboardLayout>
    );
}
