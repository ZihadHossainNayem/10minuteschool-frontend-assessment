import api from '@/utils/api/api';
import { API_ROUTES } from '@/utils/api/apiRoutes';
import { ProductPageResponse, Language } from '@/types/api/product';

export class ProductService {
    static async getProduct(slug: string, lang: Language = 'en'): Promise<ProductPageResponse> {
        try {
            const response = await api.get<ProductPageResponse>(API_ROUTES.PRODUCT(slug, lang));
            return response.data;
        } catch (error) {
            console.error(`Failed to fetch product ${slug}:`, error);
            throw error;
        }
    }
}
