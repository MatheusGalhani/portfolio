import { createClient } from '@prismicio/client';
import { _CONSTANTS } from '../constants';
import { PrismicDocument } from '@prismicio/types';

const client = createClient(_CONSTANTS.prismicUrl);

export const Page = async (
    id: string,
    locale: string,
): Promise<PrismicDocument<Record<string, any>, string, string>> => {
    const page = await client.getSingle(id, { lang: locale });
    return page;
};
