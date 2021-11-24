import { TypeSection } from "./section.model";

export interface TypeSkill {
    name: string;
    icon: string;
    rating: number;
    description: string;
}
export interface TypeSkillSection extends TypeSection {
    skills: TypeSkill[];
    max_items: number;
}
