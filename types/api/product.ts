export interface ProductPageResponse {
    code: number;
    data: ProductData;
    error: string[];
    message: string;
    payload: unknown[];
    status_code: number;
}

export interface ProductData {
    slug: string;
    id: number;
    title: string;
    description: string;
    platform: string;
    type: string;
    modality: string;
    start_at: string;
    media: Media[];
    checklist: ChecklistItem[];
    seo: SEO;
    cta_text: CTAText;
    sections: Section[];
    is_cohort_based_course: boolean;
    secondary_cta_group: unknown[];
    delivery_method: string;
}

export interface Media {
    name: string;
    resource_type: 'video' | 'image';
    resource_value: string;
    thumbnail_url?: string;
}

export interface ChecklistItem {
    color: string;
    icon: string;
    id: string;
    list_page_visibility: boolean;
    text: string;
}

export interface SEO {
    defaultMeta: DefaultMeta[];
    description: string;
    keywords: string[];
    schema: Schema[];
    title: string;
}

export interface DefaultMeta {
    content: string;
    type: string;
    value: string;
}

export interface Schema {
    meta_name: string;
    meta_value: string;
    type: string;
}

export interface CTAText {
    name: string;
    value: string;
}

export interface Section {
    type: SectionType;
    name: string;
    description: string;
    bg_color: string;
    order_idx: number;
    values: SectionValue[];
}

export type SectionType =
    | 'instructors'
    | 'features'
    | 'pointers'
    | 'about'
    | 'feature_explanations';

export type SectionValue =
    | InstructorValue
    | FeatureValue
    | PointerValue
    | AboutValue
    | FeatureExplanationValue;

export interface InstructorValue {
    description: string;
    has_instructor_page: boolean;
    image: string;
    name: string;
    short_description: string;
    slug: string;
}

export interface FeatureValue {
    icon: string;
    id: string;
    subtitle: string;
    title: string;
}

export interface PointerValue {
    color: string;
    icon: string;
    id: string;
    text: string;
}

export interface AboutValue {
    description: string;
    icon: string;
    id: string;
    title: string;
}

export interface FeatureExplanationValue {
    checklist: string[];
    file_type: string;
    file_url: string;
    id: string;
    title: string;
    video_thumbnail: string;
}

export type Language = 'en' | 'bn';
