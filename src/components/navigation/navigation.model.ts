import {
    _ABOUT_SECTION,
    _CONTACT_SECTION,
    _SERVICE_SECTION,
    _SKILL_SECTION,
} from '../../constants';

interface NavListProps {
    name: string;
    ref: string;
}

export const itemsNavHeader: NavListProps[] = [
    {
        name: _ABOUT_SECTION.title,
        ref: _ABOUT_SECTION.id,
    },
    {
        name: _SERVICE_SECTION.title,
        ref: _SERVICE_SECTION.id,
    },
    {
        name: _SKILL_SECTION.title,
        ref: _SKILL_SECTION.id,
    },
    {
        name: _CONTACT_SECTION.title,
        ref: _CONTACT_SECTION.id,
    },
];
