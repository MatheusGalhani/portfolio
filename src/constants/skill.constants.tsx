import { FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiDjango } from "react-icons/si";
import { TypeSkillSection } from "./constants.type";

const SkillConstant: TypeSkillSection = {
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

export default SkillConstant;