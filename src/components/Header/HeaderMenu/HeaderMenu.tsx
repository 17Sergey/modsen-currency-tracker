import { useState } from "react";

import BurgerIcon from "@assets/icons/burgerMenu.svg";
import CrossIcon from "@assets/icons/crossIcon.svg";
import { MENU_ITEMS } from "@constants/constants.ts";
import { useDisableBodyScroll } from "@hooks/useDisableBodyScroll.ts";

import { ToggleTheme } from "../ToggleTheme/ToggleTheme.tsx";

import {
    StyledBurgerIcon,
    StyledBurgerMenu,
    StyledCrossIcon,
    StyledDesktopMenu,
    StyledLink,
    StyledMobileMenu,
    StyledNav,
    StyledOverlay,
    StyledToggleCaption,
} from "./styled.ts";

export const HeaderMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useDisableBodyScroll(isMenuOpen);

    const getMenuItemsJSX = () =>
        MENU_ITEMS.map(({ caption, location }: MenuItem) => (
            <li key={caption}>
                <StyledLink to={location}>{caption}</StyledLink>
            </li>
        ));

    return (
        <StyledNav>
            <StyledDesktopMenu>{getMenuItemsJSX()}</StyledDesktopMenu>
            <StyledMobileMenu>
                <StyledBurgerIcon src={BurgerIcon} onClick={toggleMenu} />
                {isMenuOpen && <StyledOverlay onClick={toggleMenu}></StyledOverlay>}
                <StyledBurgerMenu $isMenuOpen={isMenuOpen}>
                    <StyledCrossIcon src={CrossIcon} onClick={toggleMenu} />
                    {getMenuItemsJSX()}
                    <div>
                        <StyledToggleCaption>Toggle theme:</StyledToggleCaption>
                        <ToggleTheme />
                    </div>
                </StyledBurgerMenu>
            </StyledMobileMenu>
        </StyledNav>
    );
};
