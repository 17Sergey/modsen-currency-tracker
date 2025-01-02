import { useState } from "react";
import { useLocation } from "react-router";

import { MENU_ITEMS } from "@constants/constants.ts";
import { useDisableBodyScroll } from "@hooks/useDisableBodyScroll.ts";

import { ToggleTheme } from "../ToggleTheme/ToggleTheme.tsx";

import {
    StyledBurgerButton,
    StyledBurgerIcon,
    StyledBurgerMenu,
    StyledCloseButton,
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

    const meta = useLocation();

    const getMenuItemsJSX = () =>
        MENU_ITEMS.map(({ caption, location }: MenuItem) => (
            <li key={caption}>
                <StyledLink to={location} $isCurrentPage={meta.pathname === location}>
                    {caption}
                </StyledLink>
            </li>
        ));

    return (
        <StyledNav>
            <StyledDesktopMenu>{getMenuItemsJSX()}</StyledDesktopMenu>
            <StyledMobileMenu>
                <StyledBurgerButton
                    aria-expanded={isMenuOpen}
                    aria-controls="menu"
                    aria-label="Open menu"
                    onClick={toggleMenu}
                >
                    <StyledBurgerIcon />
                </StyledBurgerButton>
                {isMenuOpen && <StyledOverlay onClick={toggleMenu}></StyledOverlay>}
                <StyledBurgerMenu $isMenuOpen={isMenuOpen}>
                    <StyledCloseButton
                        aria-expanded={!isMenuOpen}
                        aria-controls="menu"
                        aria-label="Close menu"
                        onClick={toggleMenu}
                    >
                        <StyledCrossIcon />
                    </StyledCloseButton>
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
