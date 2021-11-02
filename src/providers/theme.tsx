import { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as StyledProvider, DefaultTheme} from 'styled-components';

import { useLocalStorage } from '../hooks/useStorage';
import { dark, light } from '../theme/theme';
import { GlobalStyle } from '../styles/Global.styled';


export enum iTheme {
    dark = 'dark',
    light = 'light',
}


interface ThemeContextType {
    themeName: iTheme;
    setThemeName: (themeName: iTheme) => void;
}


const ThemeContext = createContext<ThemeContextType>({ themeName: iTheme.dark , setThemeName: themeName => {} });

export const useThemeContext = () => useContext(ThemeContext);


export const ThemeProvider: React.FC = ({ children }) => {
    const [storage, setStorage] = useLocalStorage("theme", iTheme.dark);
    const [themeName, setThemeName] = useState(storage);
    const [theme, setTheme] = useState<DefaultTheme>(dark);

    useEffect(() => {
        setStorage(themeName);
        setTheme(themeName === iTheme.light ? light : dark);
    }, [themeName, setStorage]);
    
    return (
        <ThemeContext.Provider value={{ themeName, setThemeName }}>
            <StyledProvider theme={theme}>
                <GlobalStyle />
                { children }
            </StyledProvider>
        </ThemeContext.Provider>
    )
}

