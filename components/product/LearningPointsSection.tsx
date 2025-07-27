import { PointerValue, Section } from '@/types/api/product';
import Card from '../ui/Card';
import { FaCheck } from 'react-icons/fa6';

interface LearningPointsSectionProps {
    section: Section;
}

export default function LearningPointsSection({ section }: LearningPointsSectionProps) {
    if (!section?.values.length) return null;

    return (
        <>
            <h3 className="text-lg md:text-xl font-semibold mb-2">{section.name}</h3>

            <Card>
                <ul className="space-y-4">
                    {section.values.map((value, index) => {
                        const pointer = value as PointerValue;

                        return (
                            <li key={pointer.id || index} className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                                    <FaCheck size={12} className="text-emerald-600" />
                                </div>
                                <span className="text-gray-700">{pointer.text}</span>
                            </li>
                        );
                    })}
                </ul>
            </Card>
        </>
    );
}
