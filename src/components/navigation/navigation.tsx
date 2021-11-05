import React from 'react';
import { itemsNavHeader } from './navigation.model';
import { NavAction, NavContainer, NavItem, NavList } from './navigation.styled';

interface NavigationProps {
    isShown?: boolean;
    onCloseHamburger: () => void;
}
const Navigation: React.FC<NavigationProps> = ({
    isShown,
    onCloseHamburger,
}) => {
    return (
        <NavContainer isShown={isShown}>
            <NavList>
                {itemsNavHeader.map(item => (
                    <NavItem key={item.ref}>
                        <NavAction to={`#${item.ref}`} onClick={onCloseHamburger} aria-label={`Navegar para a sessão #${item.ref}`}>
                            {item.name}
                        </NavAction>
                    </NavItem>
                ))}
            </NavList>
        </NavContainer>
    );
};

export default Navigation;
