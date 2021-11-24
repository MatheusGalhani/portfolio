import type {
    GetStaticPropsContext,
    GetStaticPropsResult,
    NextPage,
} from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Fragment } from 'react';
import About from '../components/about/about';
import Contact from '../components/contact/contact';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Hello from '../components/hello/hello';
import HTMLHeader from '../components/html-header/html-header';
import Service from '../components/service/service';
import Skill from '../components/skill/skill';
import { TypeAriaLabel } from '../model/aria-label.model';
import { TypeContactSection } from '../model/contact.model';
import { TypeFooter } from '../model/footer.model';
import { NavListProps } from '../model/navigation.model';
import { TypeSectionWithButton } from '../model/section.model';
import { TypeSEO } from '../model/seo.model';
import { TypeServiceSection } from '../model/service.model';
import { TypeSkillSection } from '../model/skill.model';
import { Container, Main } from '../styles/home.styled';

const CACHE_IN_SECONDS_TIME = 1800;

interface HomePageContent {
    hello: TypeSectionWithButton;
    about: TypeSectionWithButton;
    contact: TypeContactSection;
    service: TypeServiceSection;
    skill: TypeSkillSection;
    navigation: NavListProps[];
    seo: TypeSEO;
    ariaLabel: TypeAriaLabel;
    footer: TypeFooter;
}

interface HomePageProps {
    locale: string;
    content: HomePageContent;
}

const Home: NextPage<HomePageProps> = ({ content, locale }) => {
    return (
        <Fragment>
            <HTMLHeader
                title={content.seo.title}
                description={content.seo.description}
            />
            <Header
                helloID={content.hello.id}
                itemsNavHeader={content.navigation}
                locale={locale}
                ariaLabel={content.ariaLabel}
            />
            <Container>
                <Main>
                    <Hello hello={content.hello} />
                    <About about={content.about} />
                    <Service service={content.service} />
                    <Skill
                        skill={content.skill}
                        ariaLabel={content.ariaLabel}
                    />
                    <Contact contact={content.contact} />
                </Main>
            </Container>
            <Footer description={content.footer.description} />
        </Fragment>
    );
};

export async function getStaticProps({
    locale = 'pt-BR',
}: GetStaticPropsContext): Promise<GetStaticPropsResult<HomePageProps>> {
    const [localeConfig] = await Promise.all([
        serverSideTranslations(locale, ['common', 'home']),
    ]);
    const content = localeConfig._nextI18Next.initialI18nStore[locale].home as HomePageContent;
    content['navigation'] = [
        {
            name: content.about.title,
            ref: content.about.title,
        },
        {
            name: content.service.title,
            ref: content.service.id,
        },
        {
            name: content.skill.title,
            ref: content.skill.id,
        },
        {
            name: content.contact.title,
            ref: content.contact.id,
        },
    ];
    return {
        props: { ...localeConfig, locale, content },
        revalidate: CACHE_IN_SECONDS_TIME,
    };
}

export default Home;
