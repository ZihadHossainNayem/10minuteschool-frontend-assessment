import { ProductService } from '@/services/productService';
import { Language } from '@/types/api/product';
import { Metadata } from 'next';

// generate dynamic metadata for product pages
export async function generateProductMetadata(slug: string, lang: Language = 'en'): Promise<Metadata> {
    try {
        // fetch product data from api
        const response = await ProductService.getProduct(slug, lang);
        const { seo } = response.data;

        const findMeta = (value: string) => seo.defaultMeta.find(meta => meta.value === value)?.content;

        const ogImage = findMeta('og:image');
        const ogTitle = findMeta('og:title');
        const ogDescription = findMeta('og:description');

        return {
            title: seo.title,
            description: seo.description,
            keywords: seo.keywords,
            openGraph: {
                title: ogTitle || seo.title,
                description: ogDescription || seo.description,
                images: ogImage ? [{ url: ogImage }] : [],
            },
        };
    } catch (error) {
        console.error(`Failed to generate metadata for ${slug}:`, error);
        return {
            title: '10 Minute School - Course',
            description: 'Learn with expert instructors',
        };
    }
}
