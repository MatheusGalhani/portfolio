import { CodeIcon, MouseIcon, ResponsivenessIcon } from '../../icons';

interface ServicesProviderProps {
    name: string;
    description: string;
    icon: JSX.Element;
}

export const itemsServicesProvider: ServicesProviderProps[] = [
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
];
