'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { Media } from '@/types/api/product';

interface MediaSliderProps {
    media: Media[];
}

export default function MediaSlider({ media }: MediaSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const thumbnailContainerRef = useRef<HTMLDivElement>(null);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % media.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    // auto-scroll thumbnails to keep active one centered
    useEffect(() => {
        if (!thumbnailContainerRef.current || media.length <= 1) return;

        const container = thumbnailContainerRef.current;
        const activeThumbnail = container.children[currentIndex] as HTMLElement;

        if (activeThumbnail) {
            activeThumbnail.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center',
            });
        }
    }, [currentIndex, media.length]);

    if (media.length === 0) return null;

    const currentMedia = media[currentIndex];

    return (
        <div className="md:bg-white bg-transparent rounded border border-gray-200 p-1">
            <div className="relative aspect-video bg-red-100 rounded overflow-hidden">
                {currentMedia.resource_type === 'video' ? (
                    <iframe
                        src={`https://www.youtube.com/embed/${currentMedia.resource_value}`}
                        title="Course Media"
                        className="w-full h-full"
                        allowFullScreen
                    />
                ) : (
                    <Image src={currentMedia.resource_value} alt="Course Media" fill className="object-cover" />
                )}

                {/* navigation arrows only show if multiple media items */}
                {media.length > 1 && (
                    <>
                        <button
                            onClick={prevSlide}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                            aria-label="Previous slide"
                        >
                            <FaAngleLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                            aria-label="Next slide"
                        >
                            <FaAngleRight className="w-5 h-5" />
                        </button>
                    </>
                )}

                {media.length > 1 && (
                    <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                        {currentIndex + 1} / {media.length}
                    </div>
                )}
            </div>

            {/* thumbnail navigation */}
            {media.length > 1 && (
                <div className="p-4">
                    <div ref={thumbnailContainerRef} className="flex gap-2 overflow-x-auto scrollbar-none">
                        {media.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`relative flex-shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-colors
                                    ${
                                        index === currentIndex
                                            ? 'border-green-500 ring-2 ring-green-200'
                                            : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            >
                                {item.thumbnail_url ? (
                                    <Image
                                        src={item.thumbnail_url}
                                        alt=""
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                    />
                                ) : item.resource_type === 'video' ? (
                                    <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                                        <span className="text-white text-xs">📹</span>
                                    </div>
                                ) : (
                                    <Image
                                        src={item.resource_value}
                                        alt=""
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
