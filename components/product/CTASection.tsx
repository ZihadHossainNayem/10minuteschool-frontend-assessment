import Image from 'next/image';
import { ChecklistItem, CTAText } from '@/types/api/product';
import Card from '../ui/Card';

interface CTASectionProps {
    ctaText: CTAText;
    checklist: ChecklistItem[];
    price: number;
}

export default function CTASection({ ctaText, checklist, price }: CTASectionProps) {
    return (
        <Card>
            <div className="mb-4">
                <div className="text-2xl font-semibold mb-1">৳{price.toLocaleString()}</div>
            </div>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md font-semibold text-lg transition-colors mb-6">
                {ctaText.name}
            </button>

            <div className="space-y-4 border-t border-gray-100 pt-6">
                <div className="font-semibold mb-4">Course includes:</div>
                {checklist.map((item) => (
                    <div key={item.id} className="flex items-start gap-3 text-sm">
                        <Image src={item.icon} alt="" width={20} height={20} className="w-5 h-5 mt-0.5" />
                        <span className="text-gray-700">{item.text}</span>
                    </div>
                ))}
            </div>
        </Card>
    );
}
