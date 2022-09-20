import { RichText } from 'prismic-dom';
import { client } from '../client/prismic';
import { PageDocument, TypeSectionWithButton } from '../model/section.model';

export const AboutPage = async (
    locale: string,
): Promise<TypeSectionWithButton> => {
    const page = await client.getSingle<PageDocument>('about', {
        lang: locale,
    });
    const data = page.data;
    return {
        id: page.type,
        title: RichText.asText(data.title),
        description: RichText.asHtml(data.description),
        text_button: RichText.asText(data.text_button),
    };
};
