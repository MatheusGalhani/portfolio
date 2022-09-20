import { TypeSectionWithButton } from './section.model';
import type * as prismicT from '@prismicio/types';

export interface TypeContactSection extends TypeSectionWithButton {
    ariaLabel: {
        github: string;
        linkedin: string;
        email: string;
        instagram: string;
    };
    placeholder: {
        name: string;
        message: string;
    };
}

export type PageContactDocument = prismicT.PrismicDocumentWithUID<{
    title: prismicT.RichTextField;
    description: prismicT.RichTextField;
    text_button: prismicT.RichTextField;
    github: prismicT.RichTextField;
    linkedin: prismicT.RichTextField;
    email: prismicT.RichTextField;
    instagram: prismicT.RichTextField;
    name: prismicT.RichTextField;
    message: prismicT.RichTextField;
}>;
