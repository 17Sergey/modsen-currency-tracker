import styled from "styled-components";

import { THEMES } from "@constants/constants";
import { device } from "@styles/breakpoints";

export const StyledCard = styled.div`
    display: flex;
    gap: 1rem;
    position: relative;

    padding: ${({ theme }) => theme.paddings.base};
    background-color: ${({ theme }) => theme.colors.backgroundNeutral};
    border-radius: ${({ theme }) => theme.paddings.xs};
    border: 1px solid ${({ theme }) => theme.colors.border};

    transition: all ease 0.3s;

    &:hover {
        background-color: ${({ theme }) => theme.colors.border};
    }
`;
export const StyledMockButton = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
`;

export const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    z-index: 20;
`;

export const StyledName = styled.p`
    font-weight: ${({ theme }) => theme.fonts.weight.regular};
    font-size: ${({ theme }) => theme.fonts.size.md};
    margin-bottom: ${({ theme }) => theme.margins.base};
`;

export const StyledValue = styled.p`
    color: ${({ theme }) => (theme.name === THEMES.DARK ? theme.colors.textNeutral : theme.colors.textPrimary)};
`;

export const StyledIcon = styled.div`
    width: ${({ theme }) => theme.widths.icons.xl};
    height: auto;
    flex-shrink: 0;
    z-index: 20;

    & img {
        aspect-ratio: 1 / 1;
    }

    @media only screen and (${device.md}) {
        width: ${({ theme }) => theme.widths.icons.md};
    }
`;
