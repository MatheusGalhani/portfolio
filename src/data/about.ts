import { RichText } from 'prismic-dom';
import { Page } from '../client/prismic';
import { TypeSectionWithButton } from '../model/section.model';

export const AboutPage = async (
    locale: string,
): Promise<TypeSectionWithButton> => {
    const page = await Page('about', locale);
    const data = page.data;
    return {
        id: page.type,
        title: RichText.asText(data.title),
        description: RichText.asHtml(data.description),
        textButton: RichText.asText(data.text_button),
    };
};
