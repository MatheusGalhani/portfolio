import { FaPython, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiDjango } from 'react-icons/si';

export const _SKILL_MAX_ITEMS = 2;

interface SkillProps {
    name: string;
    icon: JSX.Element;
    rating: number;
    description: string;
}

export const itemSkillList: SkillProps[] = [
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
];
