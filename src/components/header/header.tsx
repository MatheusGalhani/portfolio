import React, { useCallback, useState } from 'react';
import { _CONSTANTS } from '../../constants';
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
    TitleAction,
} from './header.styled';

const Header: React.FC = () => {
    const { themeName, setThemeName } = useThemeContext();
    const [menuHamburguerShown, setMenuHamburguerShown] =
        useState<boolean>(false);
    const onHandleHamburguer = useCallback(() => {
        setMenuHamburguerShown(!menuHamburguerShown);
    }, [menuHamburguerShown]);
    const onCloseHamburger = () => setMenuHamburguerShown(false);
    const onHandleTheme = useCallback(() => {
        const newTheme =
            themeName === TypeTheme.dark ? TypeTheme.light : TypeTheme.dark;
        setThemeName(newTheme);
    }, [setThemeName, themeName]);
    return (
        <Container>
            <HeaderMenu>
                <TitleAction to="#root">
                    <Title>{_CONSTANTS.name}</Title>
                </TitleAction>
                <Spacer />
                <Navigation
                    isShown={menuHamburguerShown}
                    onCloseHamburger={onCloseHamburger}
                />
                <ThemeButton
                    onClick={onHandleTheme}
                    aria-label="Alteração temática dark-light"
                >
                    {themeName === TypeTheme.light ? <MoonIcon /> : <SunIcon />}
                </ThemeButton>
                <HamburgerButton
                    onClick={onHandleHamburguer}
                    aria-label="Alterar Menu Hamburger - Aberto/Fechado"
                >
                    {!menuHamburguerShown ? <HamburgerIcon /> : <CloseIcon />}
                </HamburgerButton>
            </HeaderMenu>
        </Container>
    );
};

export default Header;
