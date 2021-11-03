import React from 'react';
import About from '../../../components/about/about';
import Header from '../../../components/header/header';
import Hello from '../../../components/hello/hello';
import Service from '../../../components/service/service';
import { Container, Main } from './home.styled';

const Home: React.FC = () => {
    return (
        <Container>
            <Header />
            <Main>
                <Hello />
                <About />
                <Service />
            </Main>
        </Container>
    );
};

export default Home;
