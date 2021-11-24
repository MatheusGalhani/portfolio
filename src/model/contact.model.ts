import { TypeSectionWithButton } from './section.model';

export interface TypeContactSection extends TypeSectionWithButton {
    ariaLabel: {
        github: string;
        linkedin: string;
        email: string;
        instagram: string;
    };
    placeholder: {
        name: string;
        message: string;
    }
}
