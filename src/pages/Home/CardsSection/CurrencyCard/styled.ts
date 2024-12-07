import styled from "styled-components";

import { device } from "@styles/breakpoints";

export const StyledCard = styled.div`
    display: flex;
    gap: 1rem;

    padding: ${({ theme }) => theme.paddings.base};
    background-color: ${({ theme }) => theme.colors.backgroundNeutral};
    border-radius: ${({ theme }) => theme.paddings.xs};
    border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const StyledName = styled.p`
    font-weight: ${({ theme }) => theme.fonts.weight.regular};
    font-size: ${({ theme }) => theme.fonts.size.md};
    margin-bottom: ${({ theme }) => theme.margins.base};
`;

export const StyledIcon = styled.div`
    width: ${({ theme }) => theme.widths.icons.xl};
    height: auto;
    flex-shrink: 0;

    & img {
        aspect-ratio: 1 / 1;
    }

    @media only screen and (${device.md}) {
        width: ${({ theme }) => theme.widths.icons.md};
    }
`;
