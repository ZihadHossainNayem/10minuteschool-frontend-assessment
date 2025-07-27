import { AboutValue, Section } from '@/types/api/product';
import Card from '../ui/Card';
import { FaAngleDown } from 'react-icons/fa6';

interface CourseDetailsSectionProps {
    section: Section;
}

export default function CourseDetailsSection({ section }: CourseDetailsSectionProps) {
    if (!section?.values.length) return null;

    return (
        <>
            <h3 className="text-lg md:text-xl font-semibold mb-2">{section.name}</h3>

            <Card>
                <div className="space-y-4">
                    {section.values.map((value, index) => {
                        const about = value as AboutValue;

                        return (
                            <details key={about.id || index} className="group border-b border-gray-200 last:border-b-0">
                                <summary className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors list-none">
                                    <div dangerouslySetInnerHTML={{ __html: about.title }} />
                                    <FaAngleDown className="w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ml-4 group-open:rotate-180" />
                                </summary>

                                <div className="px-6 pb-6 border-t border-gray-100">
                                    <div
                                        className="text-gray-700 prose prose-sm max-w-none pt-4"
                                        dangerouslySetInnerHTML={{ __html: about.description }}
                                    />
                                </div>
                            </details>
                        );
                    })}
                </div>
            </Card>
        </>
    );
}
