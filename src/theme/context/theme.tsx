import { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as StyledProvider, DefaultTheme} from 'styled-components';

import { useLocalStorage } from '../../hooks/useStorage';
import { dark, light } from '../theme';
import { GlobalStyle } from '../../styles/Global.styled';


export enum TypeTheme {
    dark = 'dark',
    light = 'light',
}


interface ThemeContextType {
    themeName: TypeTheme;
    setThemeName: (themeName: TypeTheme) => void;
}


const ThemeContext = createContext<ThemeContextType>({ themeName: TypeTheme.dark , setThemeName: themeName => {} });

export const useThemeContext = () => useContext(ThemeContext);


export const ThemeProvider: React.FC = ({ children }) => {
    const [storage, setStorage] = useLocalStorage("theme", TypeTheme.dark);
    const [themeName, setThemeName] = useState(storage);
    const [theme, setTheme] = useState<DefaultTheme>(dark);

    useEffect(() => {
        setStorage(themeName);
        setTheme(themeName === TypeTheme.light ? light : dark);
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

