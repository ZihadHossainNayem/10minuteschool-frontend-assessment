import Image from 'next/image';
import { FeatureValue, Section } from '@/types/api/product';
import Card from '../ui/Card';

interface FeaturesSectionProps {
    section: Section;
}

export default function FeaturesSection({ section }: FeaturesSectionProps) {
    if (!section?.values.length) return null;

    return (
        <>
            <h3 className="text-lg md:text-xl font-semibold mb-2">{section.name}</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {section.values.map((value) => {
                    const feature = value as FeatureValue;

                    return (
                        <Card key={feature.id} className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center">
                                    <Image src={feature.icon} alt="" width={28} height={28} className="w-7 h-7" />
                                </div>
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="font-semibold mb-2 text-base">{feature.title}</div>
                                <p className="text-gray-600 text-sm">{feature.subtitle}</p>
                            </div>
                        </Card>
                    );
                })}
            </div>
        </>
    );
}
