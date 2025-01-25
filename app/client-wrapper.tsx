import { ThemeRegistry } from '@/components';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function ClientThemeWrapper({ children }: { children: ReactNode }) {
    return (
        <>
            <ThemeRegistry>{children}</ThemeRegistry>
            <ToastContainer />
        </>
    );
}
