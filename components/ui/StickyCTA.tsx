'use client';

import { useEffect, useState, useCallback } from 'react';

interface StickyCTAProps {
    ctaText: string;
    price: number;
}

export default function StickyCTA({ ctaText, price }: StickyCTAProps) {
    const [visible, setVisible] = useState(false);

    // show sticky cta when main cta is out of view
    const handleIntersection = useCallback(([entry]: IntersectionObserverEntry[]) => {
        setVisible(!entry.isIntersecting);
    }, []);

    useEffect(() => {
        const target = document.getElementById('initial-cta');
        if (!target) return;

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            threshold: 0.1,
        });

        observer.observe(target);
        return () => observer.disconnect();
    }, [handleIntersection]);

    return (
        <div
            className={`fixed bottom-0 left-0 w-full bg-white px-4 py-3 md:hidden z-50 border-t border-gray-200 transition-transform duration-300 ease-out ${
                visible ? 'translate-y-0' : 'translate-y-full'
            }`}
        >
            <div className="text-2xl font-semibold mb-2">৳{price.toLocaleString()}</div>
            <button
                aria-label={`Buy now for ৳${price.toLocaleString()}`}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-1 px-4 rounded-md font-semibold text-lg transition-colors"
            >
                {ctaText}
            </button>
        </div>
    );
}
