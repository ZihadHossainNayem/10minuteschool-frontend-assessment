'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Language } from '@/types/api/product';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function LanguageProviderContent({ children }: { children: ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();

    // extract language from url pathname
    const getLanguageFromPath = (): Language => {
        const segments = pathname.split('/');
        const lastSegment = segments[segments.length - 1];
        return lastSegment === 'bn' ? 'bn' : 'en';
    };

    const [language, setLanguage] = useState<Language>(getLanguageFromPath());

    // sync language when pathname changes
    useEffect(() => {
        setLanguage(getLanguageFromPath());
    }, [pathname]);

    // update language and navigate to new url
    const changeLanguage = (lang: Language) => {
        setLanguage(lang);

        // replace language in current path
        const segments = pathname.split('/');
        const currentLang = segments[segments.length - 1];

        if (currentLang === 'en' || currentLang === 'bn') {
            // replace existing language
            segments[segments.length - 1] = lang;
        } else {
            // add language to end
            segments.push(lang);
        }

        const newPath = segments.join('/');
        router.push(newPath);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    return <LanguageProviderContent>{children}</LanguageProviderContent>;
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within LanguageProvider');
    return context;
}
