import React from 'react';
import { NavAction, NavContainer, NavItem, NavList } from './navigation.styled';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '../../rules/devices';
import { NavListProps } from '../../model/navigation.model';
import { TypeAriaLabel } from '../../model/aria-label.model';
interface NavigationProps {
    isShown?: boolean;
    onCloseHamburger: () => void;
    itemsNavHeader: NavListProps[];    
    ariaLabel: TypeAriaLabel;
}
const Navigation: React.FC<NavigationProps> = ({
    ariaLabel,
    isShown,
    itemsNavHeader,
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
                            aria-label={`${ariaLabel?.nav}#${item.ref}`}
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
