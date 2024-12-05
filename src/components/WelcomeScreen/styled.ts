import styled from "styled-components";

import { THEMES } from "@constants/constants";
import { device } from "@styles/breakpoints";

export const StyledWelcomeSection = styled.section`
    padding: 4rem 0;
    background: ${({ theme }) =>
        theme.name === THEMES.DARK
            ? `linear-gradient(90deg, ${theme.colors.welcomeGradient.first} 0%, ${theme.colors.welcomeGradient.second} 100%)`
            : "none"};

    @media only screen and (${device.sm}) {
        padding: 2rem 0;
    }
`;

export const StyledFlex = styled.div`
    display: flex;
    text-align: right;

    @media only screen and (${device.xl}) {
        flex-direction: column;
        text-align: left;
    }
`;

export const StyledLeft = styled.div`
    max-width: 700px;
    flex-shrink: 0;

    @media only screen and (${device.md}) {
        max-width: 100%;
    }
`;

export const StyledHeading = styled.h1`
    font-size: ${({ theme }) => theme.fonts.size.captionLarge};
    font-weight: ${({ theme }) => theme.fonts.weight.semibold};
    padding-right: 5rem;

    background: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.captionGradient.first} 0%,
        ${({ theme }) => theme.colors.captionGradient.second} 49%,
        ${({ theme }) => theme.colors.captionGradient.third} 100%
    );

    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media only screen and (${device.md}) {
        padding-right: 0;
        font-size: ${({ theme }) => theme.fonts.size.headingXL};
    }
    @media only screen and (${device.sm}) {
        font-size: ${({ theme }) => theme.fonts.size.headingL};
    }
`;

export const StyledBigWord = styled.span`
    font-size: ${({ theme }) => theme.fonts.size.captionLargeWord};

    @media only screen and (${device.md}) {
        font-size: inherit;
    }
`;

export const StyledDescription = styled.p`
    max-width: 350px;
    margin-left: auto;
    margin-top: 2rem;

    text-align: center;
    font-size: ${({ theme }) => theme.fonts.size.medium};
    line-height: 200%;

    @media only screen and (${device.xl}) {
        max-width: 100%;
        margin-left: 0;
        text-align: left;
    }
`;

export const StyledCurrencyLogo = styled.div`
    max-width: 100%;
    width: 20rem;
    height: 20rem;

    & path {
        stroke-width: 3px;
    }

    @media only screen and (${device.xl}) {
        margin-top: 2rem;
    }
`;
