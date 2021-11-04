export interface TypeSection {
    id: string;
    title: string;
    description: string[];
}

export interface TypeServiceSection extends TypeSection {
    services: {
        name: string;
        description: string;
        icon: JSX.Element;
    }[];
}

export interface TypeSkill {
    name: string;
    icon: JSX.Element;
    rating: number;
    description: string;
}
export interface TypeSkillSection extends TypeSection {
    skills: TypeSkill[];
    max_items: number;
}

export interface TypeConstants {
    name: string;
    github: string;
    linkedin: string;
    email: string;
    instagram: string;
}
