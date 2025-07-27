import { Language } from '@/types/api/product';

export const API_ROUTES = {
    PRODUCT: (slug: string, lang: Language = 'en') => 
        `/discovery-service/api/v1/products/${slug}?lang=${lang}`,
} as const;