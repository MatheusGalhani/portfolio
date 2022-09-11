import type {
    GetStaticPropsContext,
    GetStaticPropsResult,
    NextPage,
} from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Fragment } from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Hello from '../views/hello/hello';
import HTMLHeader from '../components/html-header/html-header';
import { TypeAriaLabel } from '../model/aria-label.model';
import { TypeContactSection } from '../model/contact.model';
import { TypeFooter } from '../model/footer.model';
import { NavListProps } from '../model/navigation.model';
import { TypeSectionWithButton } from '../model/section.model';
import { TypeSEO } from '../model/seo.model';
import { TypeServiceSection } from '../model/service.model';
import { TypeSkillSection } from '../model/skill.model';
import { Container, Main } from '../styles/home.styled';
import About from '../views/about/about';
import Contact from '../views/contact/contact';
import Service from '../views/service/service';
import Skill from '../views/skill/skill';
import { AboutPage, ContactPage, HelloPage } from '../data';

const CACHE_IN_SECONDS_TIME = 1800;

interface HomePageContent {
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
    hello: TypeSectionWithButton;
    about: TypeSectionWithButton;
    contact: TypeContactSection;
}

const Home: NextPage<HomePageProps> = ({ content, locale, ...rest }) => {
    return (
        <Fragment>
            <HTMLHeader
                title={content.seo.title}
                description={content.seo.description}
            />
            <Header
                helloID={rest.hello.id}
                itemsNavHeader={content.navigation}
                locale={locale}
                ariaLabel={content.ariaLabel}
            />
            <Container>
                <Main>
                    <Hello hello={rest.hello} />
                    <About about={rest.about} />
                    <Service service={content.service} />
                    <Skill
                        skill={content.skill}
                        ariaLabel={content.ariaLabel}
                    />
                    <Contact contact={rest.contact} />
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
    const hello = await HelloPage(locale);
    const about = await AboutPage(locale);
    const contact = await ContactPage(locale);
    const content = localeConfig._nextI18Next.initialI18nStore[locale]
        .home as HomePageContent;
    content['navigation'] = [
        {
            name: about.title,
            ref: about.id,
        },
        {
            name: content.service.title,
            ref: 'services',
        },
        {
            name: content.skill.title,
            ref: 'skills',
        },
        {
            name: contact.title,
            ref: contact.id,
        },
    ];
    return {
        props: { ...localeConfig, locale, content, hello, about, contact },
        revalidate: CACHE_IN_SECONDS_TIME,
    };
}

export default Home;
