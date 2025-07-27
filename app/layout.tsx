import type { Metadata } from 'next';
import { Suspense } from 'react';
import '../styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import { LanguageProvider } from '@/providers/LanguageProvider';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import Loading from '@/components/ui/Loading';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: '10 Minute School',
    description: 'Learn with expert instructors in just 10 minutes',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ErrorBoundary>
                    <LanguageProvider>
                        <Navbar />
                        <Suspense fallback={<Loading />}>{children}</Suspense>
                    </LanguageProvider>
                </ErrorBoundary>
            </body>
        </html>
    );
}
