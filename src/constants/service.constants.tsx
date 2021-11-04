import { CodeIcon, MouseIcon, ResponsivenessIcon } from "../icons";
import { TypeServiceSection } from "./constants.type";

const ServiceConstant: TypeServiceSection = {
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

export default ServiceConstant;