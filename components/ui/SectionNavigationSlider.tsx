'use client';

import { useEffect, useRef, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

interface Section {
    type: string;
    title?: string;
}

interface SectionNavigationSliderProps {
    sections: Section[];
}

// readable names for section navigation
const SECTION_DISPLAY_NAMES: Record<string, string> = {
    instructors: 'Instructors',
    features: 'Features',
    pointers: 'Learning Points',
    feature_explanations: 'Exclusive Features',
    about: 'Course Details',
};

const SECTION_ORDER = ['instructors', 'features', 'pointers', 'feature_explanations', 'about'];

export default function SectionNavigationSlider({ sections }: SectionNavigationSliderProps) {
    const [activeSection, setActiveSection] = useState('');
    const [isSticky, setIsSticky] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // filter sections we can navigate to
    const navigableSections = sections
        .filter((s) => SECTION_ORDER.includes(s.type))
        .sort((a, b) => SECTION_ORDER.indexOf(a.type) - SECTION_ORDER.indexOf(b.type));

    // scroll tracking to update active section and sticky state
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 270);

            // find which section is currently visible
            for (const { type } of navigableSections) {
                const element = document.getElementById(`section-${type}`);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        setActiveSection(type);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navigableSections]);

    if (navigableSections.length === 0) return null;

    // scroll to specific section with smooth animation
    const scrollToSection = (type: string) => {
        const element = document.getElementById(`section-${type}`);
        if (element) {
            const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetTop = elementTop - 130;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });
            setActiveSection(type);
        }
    };

    return (
        <div
            className={`sticky top-15 z-30 transition-all duration-200 ${
                isSticky
                    ? 'bg-white px-4 py-3 border-b border-gray-200'
                    : 'px-4 py-2 bg-transparent border-b border-transparent'
            }`}
        >
            <div className="relative ml-[-14px]">
                {/* left scroll button */}
                <button
                    onClick={() => scrollContainerRef.current?.scrollBy({ left: -200, behavior: 'smooth' })}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
                >
                    <FaAngleLeft className="w-5 h-5" />
                </button>

                {/* right scroll button */}
                <button
                    onClick={() => scrollContainerRef.current?.scrollBy({ left: 200, behavior: 'smooth' })}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
                >
                    <FaAngleRight className="w-5 h-5" />
                </button>

                {/* navigation buttons container */}
                <div className="px-10 overflow-x-hidden" ref={scrollContainerRef}>
                    <div className="flex gap-2">
                        {navigableSections.map(({ type }) => (
                            <button
                                key={type}
                                onClick={() => scrollToSection(type)}
                                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                                    activeSection === type
                                        ? 'bg-red-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {SECTION_DISPLAY_NAMES[type] || type}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
