import React from 'react';
import { itemsNavHeader } from './navigation.model';
import { NavAction, NavContainer, NavItem, NavList } from './navigation.styled';

interface NavigationProps {
    isShown?: boolean;
}
const Navigation: React.FC<NavigationProps> = ({ isShown }) => {
    return (
        <NavContainer isShown={isShown}>
            <NavList>
                {itemsNavHeader.map(item => (
                    <NavItem key={item.ref}>
                        <NavAction href={item.ref}>{item.name}</NavAction>
                    </NavItem>
                ))}
            </NavList>
        </NavContainer>
    );
};

export default Navigation;
