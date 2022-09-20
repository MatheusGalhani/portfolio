import { createClient } from '@prismicio/client';
import { _CONSTANTS } from '../constants';

export const client = createClient(_CONSTANTS.prismicUrl);
