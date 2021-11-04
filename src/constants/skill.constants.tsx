import { FaGithubAlt, FaPython, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import {
    SiDjango,
    SiDocker,
    SiStyledcomponents,
    SiTypescript,
} from 'react-icons/si';
import { TypeSkillSection } from './constants.type';

const SkillConstant: TypeSkillSection = {
    id: 'skills',
    title: 'Skills',
    description:
        ['Seja bem-vindo a sessão skill. Caso queira conhecer um pouco mais sobre alguma skill, basta realizar um click na skill desejada!'],
    skills: [
        {
            name: 'Python',
            icon: <FaPython />,
            rating: 90,
            description:
                'Python é uma linguagem de programação interpretada, orientada a objetos e de alto nível com semântica dinâmica. Sendo utilizada para desenvolvimento web do lado do servidor, desenvolvimento de software e scripts de sistemas. ',
        },
        {
            name: 'Django',
            icon: <SiDjango />,
            rating: 85,
            description:
                'Django é uma framework web para Python, que incentiva o desenvolvimento rápido e um design limpo e pragmático. Ele cuida de grande parte do trabalho de desenvolvimento web.',
        },
        {
            name: 'JavaScript',
            icon: <IoLogoJavascript />,
            rating: 85,
            description: 'JavaScript é uma linguagem leve e habitualmente usado nas páginas webs, cujas implementações permitem que o script do lado do cliente interaja com o usuário e crie páginas dinâmicas. É uma linguagem de programação interpretada com recursos orientados a objetos.',
        },
        {
            name: 'TypeScript',
            icon: <SiTypescript />,
            rating: 75,
            description:
                'TypeScript é uma linguagem de programação desenvolvida e mantida pela Microsoft. Apresentando recursos adicionais, como vinculação de tipos estritos para JavaScript. TypeScript supera uma das maiores falhas do JavaScript, que é encontrar bugs no código durante a fase de desenvolvimento, verificando qualquer problema no tempo de compilação, impedindo a entrega do produto com defeitos para o cliente final.',
        },
        {
            name: 'React',
            icon: <FaReact />,
            rating: 80,
            description:
                'O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. Este framework também permite a criação de componentes reutilizáveis para nossa aplicação e a composição de elementos que podem ser alterados, sem a necessidade de recarregar a página.',
        },
        {
            name: 'Styled Components',
            icon: <SiStyledcomponents />,
            rating: 70,
            description: 'Styled Components é uma biblioteca de CSS-in-JS, criada para ser um sucessor dos Módulos CSS, sendo uma maneira de escrever CSS com escopo para um único componente e não vazar para nenhum outro elemento da página.',
        },
        {
            name: 'Github',
            icon: <FaGithubAlt />,
            rating: 80,
            description: 'GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git, permitindo que os programadores ou qualquer usuário da plataforma contribuam em projetos privados e/ou Open Source em qualquer lugar do mundo.',
        },
        {
            name: 'Docker',
            icon: <SiDocker />,
            rating: 50,
            description: 'Docker consiste em uma plataforma Open Source, cujo objetivo é gerenciar aplicativos em contêineres como se fossem VM’s. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.',
        },
    ],
    max_items: 4,
};

export default SkillConstant;
