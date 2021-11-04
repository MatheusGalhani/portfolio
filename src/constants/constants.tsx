import { FaPython, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiDjango } from 'react-icons/si';
import { CodeIcon, MouseIcon, ResponsivenessIcon } from '../icons';
import {
    TypeConstants,
    TypeSection,
    TypeServiceSection,
    TypeSkillSection,
} from './constants.type';

export const _CONSTANTS: TypeConstants = {
    name: 'Matheus Galhani',
    github: 'https://github.com/MatheusGalhani',
    linkedin: 'https://www.linkedin.com/in/matheus-galhani-0767a78b/',
    email: 'mailto:matheus.galhani@hotmail.com',
    instagram: 'https://www.instagram.com/matheusgalhani/',
};

export const _HELLO_SECTION: TypeSection = {
    id: 'hello',
    title: 'Olá, eu sou',
    description: 'Desenvolvedor full stack.',
};

export const _ABOUT_SECTION: TypeSection = {
    id: 'about',
    title: 'Sobre Mim',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium bibendum ex non pretium. In nec pretium magna, sed interdum tortor. Nullam dui tellus, consectetur vel quam vel, vestibulum ultricies massa. Curabitur et sodales tortor. Ut ac mauris mi. Nulla nec porttitor lorem.',
};

export const _SERVICE_SECTION: TypeServiceSection = {
    id: 'services',
    title: 'Serviços',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium bibendum ex non pretium. In nec pretium magna, sed interdum tortor. Nullam dui tellus, consectetur vel quam vel, vestibulum ultricies massa. Curabitur et sodales tortor. Ut ac mauris mi. Nulla nec porttitor lorem.',
    services: [
        {
            name: 'Desenvolvimento',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in orci non tellus suscipit molestie et non lorem. Duis blandit sagittis elit, quis tincidunt sem euismod vel. Integer scelerisque eros et elit bibendum, at euismod velit imperdiet.',
            icon: <CodeIcon />,
        },
        {
            name: 'SEO',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in orci non tellus suscipit molestie et non lorem. Duis blandit sagittis elit, quis tincidunt sem euismod vel. Integer scelerisque eros et elit bibendum, at euismod velit imperdiet.',
            icon: <CodeIcon />,
        },
        {
            name: 'Responsividade',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in orci non tellus suscipit molestie et non lorem. Duis blandit sagittis elit, quis tincidunt sem euismod vel. Integer scelerisque eros et elit bibendum, at euismod velit imperdiet.',
            icon: <ResponsivenessIcon />,
        },
        {
            name: 'Clean code',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in orci non tellus suscipit molestie et non lorem. Duis blandit sagittis elit, quis tincidunt sem euismod vel. Integer scelerisque eros et elit bibendum, at euismod velit imperdiet.',
            icon: <MouseIcon />,
        },
    ],
};

export const _SKILL_SECTION: TypeSkillSection = {
    id: 'skills',
    title: 'Skills',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium bibendum ex non pretium. In nec pretium magna, sed interdum tortor. Nullam dui tellus, consectetur vel quam vel, vestibulum ultricies massa. Curabitur et sodales tortor. Ut ac mauris mi. Nulla nec porttitor lorem.',
    skills: [
        {
            name: 'Python',
            icon: <FaPython />,
            rating: 90,
            description: '',
        },
        {
            name: 'Django',
            icon: <SiDjango />,
            rating: 80,
            description: '',
        },
        {
            name: 'JavaScript',
            icon: <IoLogoJavascript />,
            rating: 85,
            description: '',
        },
        {
            name: 'React',
            icon: <FaReact />,
            rating: 90,
            description: '',
        },
    ],
    max_items: 2
};

export const _CONTACT_SECTION: TypeSection = {
    id: 'contact',
    title: 'Contato',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium bibendum ex non pretium. In nec pretium magna, sed interdum tortor. Nullam dui tellus, consectetur vel quam vel, vestibulum ultricies massa. Curabitur et sodales tortor. Ut ac mauris mi. Nulla nec porttitor lorem.',
};
