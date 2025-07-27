import CourseDetailsSection from '@/components/product/CourseDetailsSection';
import CTASection from '@/components/product/CTASection';
import ExclusiveFeaturesSection from '@/components/product/ExclusiveFeaturesSection';
import FeaturesSection from '@/components/product/FeaturesSection';
import InstructorSection from '@/components/product/InstructorSection';
import LearningPointsSection from '@/components/product/LearningPointsSection';
import ProductTitle from '@/components/product/ProductTitle';
import MediaSlider from '@/components/ui/MediaSlider';
import SectionNavigationSlider from '@/components/ui/SectionNavigationSlider';
import StickyCTA from '@/components/ui/StickyCTA';
import { DEFAULT_PRICE } from '@/constants';
import { ProductService } from '@/services/productService';
import { generateProductMetadata } from '@/utils/seo/productMetadata';
import type { Metadata } from 'next';
import Image from 'next/image';

// isr - cache page for 1 hour
export const revalidate = 3600;

interface ProductPageProps {
    params: Promise<{ slug: string; lang: 'en' | 'bn' }>;
}

// pages to pre-build at build time
export async function generateStaticParams() {
    return [
        { slug: 'ielts-course', lang: 'en' },
        { slug: 'ielts-course', lang: 'bn' },
    ];
}

function RenderSection<T>({
    section,
    id,
    Component,
}: {
    section?: T;
    id: string;
    Component: React.ComponentType<{ section: T }>;
}) {
    if (!section) return null;
    return (
        <div id={id}>
            <Component section={section} />
        </div>
    );
}

export async function generateMetadata(props: ProductPageProps): Promise<Metadata> {
    const { slug, lang } = await props.params;
    return generateProductMetadata(slug, lang);
}

export default async function ProductPage(props: ProductPageProps) {
    const { slug, lang } = await props.params;

    const response = await ProductService.getProduct(slug, lang);
    const product = response.data;

    // extract sections by type for easier access
    const instructorSection = product.sections.find((s) => s.type === 'instructors');
    const featuresSection = product.sections.find((s) => s.type === 'features');
    const pointersSection = product.sections.find((s) => s.type === 'pointers');
    const aboutSection = product.sections.find((s) => s.type === 'about');
    const featureExplanationsSection = product.sections.find((s) => s.type === 'feature_explanations');

    return (
        <div className="min-h-screen relative">
            <div className="absolute inset-x-0 top-0 min-h-[750px] md:min-h-[350px] lg:min-h-[300px] z-0">
                <Image
                    src="https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg"
                    alt="Background banner"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center center' }}
                    priority
                />
            </div>

            <div className="relative z-10 mx-auto px-4 py-8 max-w-[1200px]">
                <div className="md:grid md:grid-cols-12 md:gap-6">
                    <div className="md:hidden mb-4">{product.media && <MediaSlider media={product.media} />}</div>

                    <div className="md:col-span-8 space-y-4">
                        <ProductTitle title={product.title} description={product.description} />

                        <div className="hidden md:block sticky top-15 z-30 mb-15">
                            <SectionNavigationSlider sections={product.sections} />
                        </div>

                        <div id="initial-cta" className="md:hidden mb-6">
                            <CTASection
                                ctaText={product.cta_text}
                                checklist={product.checklist}
                                price={DEFAULT_PRICE}
                            />
                        </div>

                        <div className="space-y-8">
                            <RenderSection
                                id="section-instructors"
                                section={instructorSection}
                                Component={InstructorSection}
                            />
                            <RenderSection
                                id="section-features"
                                section={featuresSection}
                                Component={FeaturesSection}
                            />
                            <RenderSection
                                id="section-pointers"
                                section={pointersSection}
                                Component={LearningPointsSection}
                            />
                            <RenderSection
                                id="section-feature_explanations"
                                section={featureExplanationsSection}
                                Component={ExclusiveFeaturesSection}
                            />
                            <RenderSection id="section-about" section={aboutSection} Component={CourseDetailsSection} />
                        </div>
                    </div>

                    <div className="hidden md:block md:col-span-4 space-y-6">
                        {product.media && <MediaSlider media={product.media} />}
                        <div className="space-y-4 sticky top-23">
                            <CTASection
                                ctaText={product.cta_text}
                                checklist={product.checklist}
                                price={DEFAULT_PRICE}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <StickyCTA ctaText={product.cta_text.name} price={DEFAULT_PRICE} />
        </div>
    );
}
