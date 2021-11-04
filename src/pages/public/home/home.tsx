import React, { Fragment } from 'react';
import About from '../../../components/about/about';
import Contact from '../../../components/contact/contact';
import Footer from '../../../components/footer/footer';
import Header from '../../../components/header/header';
import Hello from '../../../components/hello/hello';
import Service from '../../../components/service/service';
import Skill from '../../../components/skill/skill';
import { Container, Main } from './home.styled';

const Home: React.FC = () => {
    return (
        <Fragment>
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

export default Home;
