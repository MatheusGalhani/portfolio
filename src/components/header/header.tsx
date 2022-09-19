import { useRouter } from 'next/dist/client/router';
import React, { useCallback, useMemo, useState } from 'react';
import { _CONSTANTS } from '../../constants';
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '../../icons';
import { TypeAriaLabel } from '../../model/aria-label.model';
import { NavListProps } from '../../model/navigation.model';
import { TypeTheme, useThemeContext } from '../../theme/context/theme';
import Navigation from '../navigation/navigation';
import {
    Container,
    HamburgerButton,
    HeaderMenu,
    LanguageButton,
    LanguageImage,
    Spacer,
    ThemeButton,
    Title,
    TitleAction,
} from './header.styled';

interface HeaderProps {
    helloID: string;
    itemsNavHeader: NavListProps[];
    locale: string;
    ariaLabel: TypeAriaLabel;
}
const Header: React.FC<HeaderProps> = ({
    ariaLabel,
    helloID,
    itemsNavHeader,
    locale,
}) => {
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
    const { languageSrc, languageAlt, redirectLocale } = useMemo(() => {
        if (locale === 'en-US') {
            return {
                languageSrc: 'assets/flag/brazil.svg',
                languageAlt: 'Change to Portuguese',
                redirectLocale: 'pt-BR',
            };
        }
        return {
            languageSrc: 'assets/flag/usa.svg',
            languageAlt: 'Alterar para inglês',
            redirectLocale: 'en-US',
        };
    }, [locale]);
    const router = useRouter();
    const handleLocaleChange = useCallback(
        (locale: string) => {
            router.push(router.asPath, router.asPath, { locale });
        },
        [router],
    );
    return (
        <Container>
            <HeaderMenu>
                <TitleAction href={`#${helloID}`}>
                    <Title>{_CONSTANTS.name}</Title>
                </TitleAction>
                <Spacer />
                <Navigation
                    itemsNavHeader={itemsNavHeader}
                    isShown={menuHamburguerShown}
                    onCloseHamburger={onCloseHamburger}
                    ariaLabel={ariaLabel}
                />
                <LanguageButton
                    onClick={() => handleLocaleChange(redirectLocale)}
                >
                    <LanguageImage src={languageSrc} alt={languageAlt} />
                </LanguageButton>
                <ThemeButton
                    onClick={onHandleTheme}
                    aria-label={ariaLabel?.header.theme}
                >
                    {themeName === TypeTheme.light ? <MoonIcon /> : <SunIcon />}
                </ThemeButton>
                <HamburgerButton
                    onClick={onHandleHamburguer}
                    aria-label={ariaLabel?.header.hamburger}
                >
                    {!menuHamburguerShown ? <HamburgerIcon /> : <CloseIcon />}
                </HamburgerButton>
            </HeaderMenu>
        </Container>
    );
};

export default Header;
