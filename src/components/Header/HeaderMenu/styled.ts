import { Link } from "react-router";
import styled from "styled-components";

import BurgerIcon from "@assets/icons/burgerMenu.svg";
import CrossIcon from "@assets/icons/crossIcon.svg";
import { device } from "@styles/breakpoints";

export const StyledNav = styled.nav`
    width: 100%;
    max-width: 500px;
    margin: 0 auto;

    @media only screen and (${device.md}) {
        width: auto;
        margin: 0;
    }
`;

export const StyledDesktopMenu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    @media only screen and (${device.md}) {
        display: none;
    }
`;

export const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: ${({ theme }) => theme.fonts.size.base};
    font-weight: ${({ theme }) => theme.fonts.weight.light};

    &:hover {
        text-decoration: underline;
        text-underline-offset: 0.25rem;
    }
`;

export const StyledMobileMenu = styled.ul`
    display: none;
    @media only screen and (${device.md}) {
        display: block;
    }
`;

export const StyledBurgerMenu = styled.div<{
    $isMenuOpen: boolean;
}>`
    position: fixed;
    z-index: 200;
    top: 0;
    right: ${({ $isMenuOpen }) => ($isMenuOpen ? "0" : "-100%")};

    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 2rem;

    height: 100vh;
    padding: 2rem;

    transition: all 0.3s ease;
    background-color: ${({ $isMenuOpen, theme }) => $isMenuOpen && theme.colors.background};
`;

export const StyledBurgerButton = styled.button`
    width: 2rem;
    height: 2rem;
`;

export const StyledBurgerIcon = styled(BurgerIcon)`
    width: 100%;
    height: 100%;
    stroke: ${({ theme }) => theme.colors.textPrimary};
`;

export const StyledCloseButton = styled.button`
    width: 2.5rem;
    height: 2.5rem;
    align-self: flex-end;
    position: relative;
    left: 1rem;
`;

export const StyledCrossIcon = styled(CrossIcon)`
    width: 100%;
    height: 100%;
    stroke: ${({ theme }) => theme.colors.textPrimary};
    color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StyledOverlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 200;
    overflow: hidden;

    cursor: pointer;

    background-color: ${({ theme }) => theme.colors.backgroundNeutral};
    opacity: 0.6;
`;

export const StyledToggleCaption = styled.p`
    margin-bottom: 1rem;
`;
