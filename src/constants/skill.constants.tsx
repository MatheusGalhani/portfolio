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
        '* Seja bem-vindo a sessão skill. Caso desejar saber um pouco mais sobre as linguagens, basta pressionar a skill desejada! *',
    skills: [
        {
            name: 'Python',
            icon: <FaPython />,
            rating: 90,
            description:
                'Python é uma linguagem de programação interpretada, orientada a objetos e de alto nível com semântica dinâmica desenvolvida por Guido van Rossum. É utilizada para desenvolvimento web do lado do servidor, desenvolvimento de software, matemática e scripts de sistemas. ',
        },
        {
            name: 'Django',
            icon: <SiDjango />,
            rating: 85,
            description:
                'Django é uma estrutura da web Python de alto nível que incentiva o desenvolvimento rápido e um design limpo e pragmático. Ele cuida de grande parte do trabalho de desenvolvimento da web, para que você possa se concentrar em escrever seu aplicativo sem precisar reinventar a roda.',
        },
        {
            name: 'JavaScript',
            icon: <IoLogoJavascript />,
            rating: 85,
            description: 'JavaScript é uma linguagem dinâmica de programação de computador. É leve e mais comumente usado como parte de páginas da web, cujas implementações permitem que o script do lado do cliente interaja com o usuário e crie páginas dinâmicas. É uma linguagem de programação interpretada com recursos orientados a objetos.',
        },
        {
            name: 'TypeScript',
            icon: <SiTypescript />,
            rating: 75,
            description:
                'TypeScript é uma linguagem de programação desenvolvida e mantida pela Microsoft. Ele apresenta recursos adicionais, como vinculação de tipo estrito (variáveis são vinculadas a tipos de dados específicos) para JavaScript e também pode ser compilado para JavaScript. TypeScript supera o maior problema com JavaScript; que é: um problema só pode ser detectado durante o tempo de execução em JavaScript, o que pode resultar no envio de aplicativos com bugs ao usuário final. Isso afetará qualquer negócio negativamente, dificultando a experiência do usuário. O TypeScript remove esse problema verificando qualquer problema no tempo de compilação. ',
        },
        {
            name: 'React',
            icon: <FaReact />,
            rating: 80,
            description:
                'O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. O React.JS também permite a criação de componentes reutilizaveis para nossa aplicação e a criação de grandes aplicativos da web que podem alterar os dados, sem recarregar a página.',
        },
        {
            name: 'Styled Components',
            icon: <SiStyledcomponents />,
            rating: 70,
            description: 'Styled Components é uma biblioteca de CSS-in-JS, criada para ser um sucessor dos Módulos CSS, uma maneira de escrever CSS com escopo para um único componente e não vazar para nenhum outro elemento da página.',
        },
        {
            name: 'Github',
            icon: <FaGithubAlt />,
            rating: 80,
            description: 'GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.',
        },
        {
            name: 'Docker',
            icon: <SiDocker />,
            rating: 50,
            description: 'Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.',
        },
    ],
    max_items: 4,
};

export default SkillConstant;
