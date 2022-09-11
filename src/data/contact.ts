import { RichText } from 'prismic-dom';
import { Page } from '../client/prismic';
import { TypeContactSection } from '../model/contact.model';

export const ContactPage = async (
    locale: string,
): Promise<TypeContactSection> => {
    const page = await Page('contact', locale);
    const data = page.data;
    return {
        id: page.type,
        title: RichText.asText(data.title),
        description: RichText.asHtml(data.description),
        textButton: RichText.asText(data.text_button),
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
