import type { GetStaticProps, NextPage } from 'next';
import { Fragment } from 'react';
import About from '../components/about/about';
import Contact from '../components/contact/contact';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Hello from '../components/hello/hello';
import HTMLHeader from '../components/html-header/html-header';
import Service from '../components/service/service';
import Skill from '../components/skill/skill';
import { Container, Main } from '../styles/home.styled';

const CACHE_IN_SECONDS_TIME = 1800;

const Home: NextPage = () => {
    return (
        <Fragment>
            <HTMLHeader />
            <Header />
            <Container>
                <Main>
                    <Hello />
                    <About />
                    <Service />
                    <Skill />
                    <Contact />
                </Main>
            </Container>
            <Footer />
        </Fragment>
    );
};


export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {},
        revalidate: CACHE_IN_SECONDS_TIME
    }
}

export default Home;
