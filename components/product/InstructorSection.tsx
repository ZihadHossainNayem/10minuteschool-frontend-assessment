import Image from 'next/image';
import { InstructorValue, Section } from '@/types/api/product';
import Card from '../ui/Card';

interface InstructorSectionProps {
    section: Section;
}

export default function InstructorSection({ section }: InstructorSectionProps) {
    if (!section?.values.length) return null;

    return (
        <>
            <h3 className="text-lg md:text-xl font-semibold mb-2">{section.name}</h3>

            <Card>
                <div className="space-y-4">
                    {section.values.map((value, index) => {
                        const instructor = value as InstructorValue;

                        return (
                            <div key={index} className="flex flex-col sm:flex-row gap-6">
                                <div className="my-auto">
                                    <Image
                                        src={instructor.image}
                                        alt={instructor.name}
                                        width={100}
                                        height={100}
                                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-gray-100"
                                    />
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold">{instructor.name}</h3>
                                    <div
                                        className="text-gray-700 text-sm"
                                        dangerouslySetInnerHTML={{ __html: instructor.description }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Card>
        </>
    );
}
