import styled from "styled-components";

import { device } from "@styles/breakpoints";

export const StyledFooter = styled.footer`
    margin-top: ${({ theme }) => theme.margins.xxl};
`;

export const StyledFlex = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 5rem;

    @media only screen and (${device.lg}) {
        flex-direction: column;
        margin-bottom: ${({ theme }) => theme.margins.m};
        gap: 2rem;
    }
`;

export const StyledLeft = styled.div`
    max-width: 400px;

    @media only screen and (${device.lg}) {
        max-width: 100%;
    }
`;

export const StyledCaption = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    p {
        font-weight: ${({ theme }) => theme.fonts.weight.semibold};
        font-size: ${({ theme }) => theme.fonts.size.md};

        background: linear-gradient(
            to right,
            ${({ theme }) => theme.colors.captionGradient.first} 0%,
            ${({ theme }) => theme.colors.captionGradient.second} 49%,
            ${({ theme }) => theme.colors.captionGradient.third} 100%
        );

        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

export const StyledLogo = styled.div`
    width: ${({ theme }) => theme.widths.icons.sm};
    height: ${({ theme }) => theme.widths.icons.sm};
    display: block;
    flex-shrink: 0;
`;

export const StyledDescription = styled.p`
    margin-top: ${({ theme }) => theme.margins.m};
    line-height: 170%;

    @media only screen and (${device.md}) {
        max-width: 100%;
    }
`;

export const StyledFooterNav = styled.nav`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: space-between;
`;

export const StyledNavBlock = styled.div`
    width: fit-content;
    span {
        color: ${({ theme }) => theme.colors.textPrimary};
        font-weight: ${({ theme }) => theme.fonts.weight.regular};
        font-size: ${({ theme }) => theme.fonts.size.md};
    }

    ul {
        margin-top: ${({ theme }) => theme.margins.m};

        li {
            font-weight: ${({ theme }) => theme.fonts.weight.regular};
            color: ${({ theme }) => theme.colors.textFooter};
            margin-top: ${({ theme }) => theme.margins.sm};

            &:hover {
                text-decoration: underline;
                text-underline-offset: ${({ theme }) => theme.paddings.xs};
            }
        }
    }
`;

export const StyledCopywright = styled.div`
    padding: ${({ theme }) => theme.paddings.xxl} 0;

    p {
        font-weight: ${({ theme }) => theme.fonts.weight.regular};
        color: ${({ theme }) => theme.colors.textFooter};
        text-align: center;
    }
`;
