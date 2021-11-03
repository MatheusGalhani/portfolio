import React from 'react';
import Home from './pages/public/home/home';
import { ThemeProvider } from './theme/context/theme';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <Home />
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
