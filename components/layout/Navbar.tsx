'use client';

import { useLanguage } from '@/providers/LanguageProvider';
import { SUPPORTED_LANGUAGES } from '@/constants';
import Image from 'next/image';
import { useState } from 'react';
import { FaAngleDown, FaGlobe } from 'react-icons/fa6';

// convert constants object to array format for mapping
const languageOptions = Object.values(SUPPORTED_LANGUAGES);

export default function Navbar() {
    const { language, setLanguage } = useLanguage();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // find current language object from available options
    const currentLanguage = languageOptions.find((lang) => lang.code === language);

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-3">
                <div className="flex justify-between items-center">
                    {/* logo section */}
                    <div className="flex items-center">
                        <Image src="/10mslogo-svg.svg" alt="10 Minute School" width={100} height={28} />
                    </div>

                    {/* right side navigation */}
                    <div className="flex items-center gap-6">
                        {/* language selector dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="min-w-32 flex items-center justify-between gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100"
                            >
                                <FaGlobe className="w-4 h-4 text-gray-500" />
                                {currentLanguage?.nativeName}
                                <FaAngleDown
                                    className={`w-4 h-4 transform transition-transform ${
                                        isDropdownOpen ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>

                            {/* language options dropdown */}
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                                    {languageOptions.map((option) => (
                                        <button
                                            key={option.code}
                                            onClick={() => {
                                                setLanguage(option.code);
                                                setIsDropdownOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 first:rounded-t-md last:rounded-b-md ${
                                                language === option.code
                                                    ? 'bg-green-50 text-green-700'
                                                    : 'text-gray-700'
                                            }`}
                                        >
                                            {option.nativeName}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* login button */}
                        <button className="text-sm font-medium text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md transition-colors">
                            Login
                        </button>
                    </div>
                </div>
            </div>

            {isDropdownOpen && <div className="fixed inset-0 z-0" onClick={() => setIsDropdownOpen(false)} />}
        </nav>
    );
}
