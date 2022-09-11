import { TypeSection } from './section.model';

export interface TypeServiceSection extends TypeSection {
    items: {
        name: string;
        description: string;
        icon: string;
    }[];
}
