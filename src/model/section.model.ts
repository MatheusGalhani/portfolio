export interface TypeSection {
    id: string;
    title: string;
    description: string;
}

export interface TypeSectionWithButton extends TypeSection {
    text_button: string;
}
