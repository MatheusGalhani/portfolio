import { TypeSection } from './section.model';
import type * as prismicT from '@prismicio/types';

export interface TypeServiceSection extends TypeSection {
    items: {
        name: string;
        description: string;
        icon: string;
    }[];
}

type ItemsDocument = prismicT.GroupField<{
    name: prismicT.RichTextField;
    detail: prismicT.RichTextField;
    icon: prismicT.ImageFieldImage;
}>;

export type PageServiceDocument = prismicT.PrismicDocumentWithUID<{
    title: prismicT.RichTextField;
    description: prismicT.RichTextField;
    items: ItemsDocument;
}>;
