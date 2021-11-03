import React from 'react';
import Header from '../../../components/header/header';
import Hello from '../../../components/hello/hello';
import { Container, Main } from './home.styled';

const Home: React.FC = () => {
    return (
        <Container>
            <Header />
            <Main>
                <Hello />
            </Main>
        </Container>
    );
};

export default Home;
