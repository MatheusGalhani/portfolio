import React, { useCallback } from 'react';
import { CONSTANTS } from '../../constants/constants';
import useToggle from '../../hooks/useToggle';
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '../../icons';
import { TypeTheme, useThemeContext } from '../../theme/context/theme';
import Navigation from '../navigation/navigation';
import {
    Container,
    HamburgerButton,
    HeaderMenu,
    Spacer,
    ThemeButton,
    Title,
} from './header.styled';

const Header: React.FC = () => {
    const { themeName, setThemeName } = useThemeContext();
    const [menuHamburguerShown, setMenuHamburguerShown] = useToggle();
    const onHandleTheme = useCallback(() => {
        const newTheme =
            themeName === TypeTheme.dark ? TypeTheme.light : TypeTheme.dark;
        setThemeName(newTheme);
    }, [setThemeName, themeName]);
    return (
        <Container>
            <HeaderMenu>
                <Title>{CONSTANTS.name}</Title>
                <Spacer />
                <Navigation isShown={menuHamburguerShown} />
                <ThemeButton onClick={onHandleTheme}>
                    {themeName === TypeTheme.light ? <MoonIcon /> : <SunIcon />}
                </ThemeButton>
                <HamburgerButton onClick={setMenuHamburguerShown}>
                    {!menuHamburguerShown ? <HamburgerIcon /> : <CloseIcon />}
                </HamburgerButton>
            </HeaderMenu>
        </Container>
    );
};

export default Header;
