import { CodeIcon, MouseIcon, ResponsivenessIcon, SearchIcon } from '../icons';
import { TypeServiceSection } from './constants.type';

const ServiceConstant: TypeServiceSection = {
    id: 'services',
    title: 'Serviços',
    description: [
        'Se você precisa de alguém para desenvolver um aplicativo, site pessoal, comercial ou até mesmo uma simples landing page você está no lugar certo!',
        'Realizo as entregas dos projetos através do Github em um repositório privado ou público, com o intuito de manter o código sempre versionado, facilitando o processo de controle de histórico.'
    ],
    services: [
        {
            name: 'Development',
            description: "Desenvolvimento de projetos end-to-end, criando API's no padrão REST e criando websites dinâmicos ou estáticos.",
            icon: <CodeIcon />,
        },
        {
            name: 'Mobile-friendly',
            description:
                'Design responsivo tornando seu site acessível, independentemente do dispositivo. Criando telas a partir do conceito Mobile First.',
            icon: <ResponsivenessIcon />,
        },
        {
            name: 'Analytics',
            description:
                'Obtenha informações sobre quem está navegando em seu site, para que você possa tomar decisões de negócios mais inteligentes. ',
            icon: <SearchIcon />,
        },
        {
            name: 'Clean code',
            description:
                'Desenvolvimento seguindo os principais design patterns, com objetivo de tornar o código mais intuitivo, elegante e com fácil manutenção.',
            icon: <MouseIcon />,
        },
    ],
};

export default ServiceConstant;
