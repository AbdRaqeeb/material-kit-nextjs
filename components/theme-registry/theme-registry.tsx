'use client';
import { ReactNode } from 'react';

import { ThemeProvider } from '@/theme/theme-provider';
import EmotionCache from './emotion-cache';

export default function ThemeRegistry({ children }: { children: ReactNode }) {
    return (
        <EmotionCache options={{ key: 'mui' }}>
            <ThemeProvider>{children}</ThemeProvider>
        </EmotionCache>
    );
}
