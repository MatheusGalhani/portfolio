import React from 'react';
import { itemsNavHeader } from './navigation.model';
import { NavAction, NavContainer, NavItem, NavList } from './navigation.styled';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '../../rules/devices';
interface NavigationProps {
    isShown?: boolean;
    onCloseHamburger: () => void;
}
const Navigation: React.FC<NavigationProps> = ({
    isShown,
    onCloseHamburger,
}) => {
    const responsiveController = useMediaQuery({ query: breakpoints.tablets });
    return (
        <NavContainer isShown={isShown && !responsiveController}>
            <NavList>
                {itemsNavHeader.map(item => (
                    <NavItem key={item.ref}>
                        <NavAction
                            href={`#${item.ref}`}
                            onClick={onCloseHamburger}
                            aria-label={`Navegar para a sessão #${item.ref}`}
                        >
                            {item.name}
                        </NavAction>
                    </NavItem>
                ))}
            </NavList>
        </NavContainer>
    );
};

export default Navigation;
