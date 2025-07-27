import Image from 'next/image';
import { FeatureExplanationValue, Section } from '@/types/api/product';
import { FaCheck } from 'react-icons/fa6';

interface ExclusiveFeaturesSectionProps {
    section: Section;
}

export default function ExclusiveFeaturesSection({ section }: ExclusiveFeaturesSectionProps) {
    if (!section?.values.length) return null;

    return (
        <>
            <h3 className="text-lg md:text-xl font-semibold mb-2">{section.name}</h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {section.values.map((value, index) => {
                    const item = value as FeatureExplanationValue;

                    return (
                        <div key={item.id || index} className="border border-gray-200 rounded-md">
                            <div className="relative bg-gray-100 h-[300px]">
                                <Image
                                    src={item.file_url}
                                    alt={item.title}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                />
                            </div>

                            <div className="p-6">
                                <div className="font-semibold mb-3 text-lg">{item.title}</div>

                                <ul className="space-y-3">
                                    {item.checklist.map((checkItem, checkIndex) => (
                                        <li key={checkIndex} className="flex items-start gap-3">
                                            <div className="flex-shrink-0 w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
                                                <FaCheck size={12} className="text-emerald-600" />
                                            </div>
                                            <span className="text-gray-700 text-sm">{checkItem}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
