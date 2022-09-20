import { RichText } from 'prismic-dom';
import { client } from '../client/prismic';
import {
    PageContactDocument,
    TypeContactSection,
} from '../model/contact.model';

export const ContactPage = async (
    locale: string,
): Promise<TypeContactSection> => {
    const page = await client.getSingle<PageContactDocument>('contact', {
        lang: locale,
    });
    const data = page.data;
    return {
        id: page.type,
        title: RichText.asText(data.title),
        description: RichText.asHtml(data.description),
        text_button: RichText.asText(data.text_button),
        ariaLabel: {
            github: RichText.asText(data.github),
            linkedin: RichText.asText(data.linkedin),
            email: RichText.asText(data.email),
            instagram: RichText.asText(data.instagram),
        },
        placeholder: {
            name: RichText.asText(data.name),
            message: RichText.asText(data.message),
        },
    };
};
