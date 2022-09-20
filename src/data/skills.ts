import { RichText } from 'prismic-dom';
import { client } from '../client/prismic';
import { PageSkillDocument, TypeSkillSection } from '../model/skill.model';

export const SkillsPage = async (locale: string): Promise<TypeSkillSection> => {
    const page = await client.getSingle<PageSkillDocument>('skill', {
        lang: locale,
    });
    const data = page.data;
    const items = data.items.map(item => ({
        name: RichText.asText(item.name),
        rating: item.rating,
        description: RichText.asHtml(item.detail),
        icon: item.icon.url || '',
    }));
    return {
        id: page.type,
        title: RichText.asText(data.title),
        description: RichText.asHtml(data.description),
        max_items: data.max_items,
        items,
    };
};
