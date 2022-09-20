import { RichText } from 'prismic-dom';
import { client } from '../client/prismic';
import {
    PageServiceDocument,
    TypeServiceSection,
} from '../model/service.model';

export const ServicePage = async (
    locale: string,
): Promise<TypeServiceSection> => {
    const page = await client.getSingle<PageServiceDocument>('service', {
        lang: locale,
    });
    const data = page.data;
    const items = data.items.map(item => ({
        name: RichText.asText(item.name),
        description: RichText.asHtml(item.detail),
        icon: item.icon.url || '',
    }));
    return {
        id: page.type,
        title: RichText.asText(data.title),
        description: RichText.asHtml(data.description),
        items,
    };
};
