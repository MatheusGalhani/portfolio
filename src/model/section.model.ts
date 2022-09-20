import type * as prismicT from '@prismicio/types';

export interface TypeSection {
    id: string;
    title: string;
    description: string;
}

export interface TypeSectionWithButton extends TypeSection {
    text_button: string;
}

export type PageDocument = prismicT.PrismicDocumentWithUID<{
    title: prismicT.RichTextField;
    description: prismicT.RichTextField;
    text_button: prismicT.RichTextField;
}>;
