import { TypeSection } from "./section.model";

export interface TypeServiceSection extends TypeSection {
    services: {
        name: string;
        description: string;
        icon: string;
    }[];
}
