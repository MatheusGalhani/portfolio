import { TypeSection } from './section.model';
import type * as prismicT from '@prismicio/types';

export interface TypeSkill {
    name: string;
    icon: string;
    rating: number;
    description: string;
}
export interface TypeSkillSection extends TypeSection {
    items: TypeSkill[];
    max_items: number;
}

type ItemsDocument = prismicT.GroupField<{
    name: prismicT.RichTextField;
    detail: prismicT.RichTextField;
    icon: prismicT.ImageFieldImage;
    rating: number;
}>;

export type PageSkillDocument = prismicT.PrismicDocumentWithUID<{
    title: prismicT.RichTextField;
    description: prismicT.RichTextField;
    max_items: number;
    items: ItemsDocument;
}>;
