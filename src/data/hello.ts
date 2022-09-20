import { RichText } from 'prismic-dom';
import { PageDocument, TypeSectionWithButton } from '../model/section.model';
import { _CONSTANTS } from '../constants';
import { client } from '../client/prismic';

export const HelloPage = async (
    locale: string,
): Promise<TypeSectionWithButton> => {
    const page = await client.getSingle<PageDocument>('hello', {
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
