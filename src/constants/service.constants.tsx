import { CodeIcon, MouseIcon, ResponsivenessIcon, SearchIcon } from '../icons';
import { TypeServiceSection } from './constants.type';

const ServiceConstant: TypeServiceSection = {
    id: 'services',
    title: 'Serviços',
    description:
        'Se você precisa de alguém para desenvolver um aplicativo, site pessoal ou comercial ou até simples landing page você está no lugar certo!',
    services: [
        {
            name: 'Development',
            description: "Desenvolvimento de projetos end-to-end, criando API's no padrão REST e criando websites dinâmicos ou estáticos.",
            icon: <CodeIcon />,
        },
        {
            name: 'Mobile-friendly',
            description:
                'Design responsivo tornando seu site acessível a todos os usuários, independentemente do dispositivo. Criando telas a partir do conceito Mobile First.',
            icon: <ResponsivenessIcon />,
        },
        {
            name: 'Analytics',
            description:
                'Obtenha informações sobre quem está navegando em seu site para que você possa tomar decisões de negócios mais inteligentes. ',
            icon: <SearchIcon />,
        },
        {
            name: 'Clean code',
            description:
                'Desenvolvimento seguindo os principais design patterns para deixar o código intuitivo, elegante e com fácil manutenção.',
            icon: <MouseIcon />,
        },
    ],
};

export default ServiceConstant;
