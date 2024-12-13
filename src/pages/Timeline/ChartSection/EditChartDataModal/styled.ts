import styled from "styled-components";

import CrossIcon from "@assets/icons/CrossIcon.svg";
import ExchangeIcon from "@assets/icons/ExchangeIcon.svg";
import { THEMES } from "@constants/constants";
import { device } from "@styles/breakpoints";
import { button } from "@styles/mixins/button";
import { customScroll } from "@styles/mixins/customScroll";
import { modalBox } from "@styles/mixins/modal";

export const StyledBox = styled.div`
    ${modalBox}

    max-height: 95vh;
    overflow-y: auto;

    width: 50vw;
    padding: ${({ theme }) => theme.paddings.xl};
    background-color: ${({ theme }) =>
        theme.name === THEMES.DARK ? theme.colors.border : theme.colors.backgroundNeutral};
    border-radius: ${({ theme }) => theme.paddings.sm};

    @media only screen and (${device.lg}) {
        width: 80vw;
    }
`;

export const StyledButton = styled.button`
    ${button}

    &:active {
        transform: none;
    }

    @media only screen and (${device.md}) {
        width: 100%;
    }

    @media only screen and (${device.sm}) {
        padding: ${({ theme }) => theme.paddings.sm} ${({ theme }) => theme.paddings.base};
    }
`;

export const StyledCloseBtn = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    flex-shrink: 0;

    width: ${({ theme }) => theme.widths.icons.base};
    height: ${({ theme }) => theme.widths.icons.base};
`;

export const StyledScrollableContent = styled.div`
    overflow-y: auto;
    ${customScroll};
`;

export const StyledCrossIcon = styled(CrossIcon)`
    width: 100%;
    height: 100%;
    stroke: ${({ theme }) => theme.colors.textPrimary};
    color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StyledDataFormWrapper = styled.div`
    margin: ${({ theme }) => theme.margins.md} 0;

    @media only screen and (${device.md}) {
        margin-bottom: ${({ theme }) => theme.margins.xs};
    }
`;

export const StyledExchangeIcon = styled(ExchangeIcon)`
    width: ${({ theme }) => theme.widths.icons.sm};
    height: ${({ theme }) => theme.widths.icons.sm};
    fill: ${({ theme }) => theme.colors.textPrimary};

    margin: ${({ theme }) => theme.margins.base} 0;
`;

export const StyledButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({ theme }) => theme.margins.sm};
    flex-wrap: wrap;
`;

export const StyledDayButton = styled(StyledButton)``;

export const StyledDayButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({ theme }) => theme.margins.sm};
    flex-wrap: wrap;

    @media only screen and (${device.md}) {
        flex-direction: column;
    }
`;

export const StyledUpdateButton = styled(StyledButton)`
    background-color: ${({ theme }) =>
        theme.name === THEMES.DARK ? theme.colors.updatedAtPulses.inner : theme.colors.border};

    &:hover {
        background-color: ${({ theme }) =>
            theme.name === THEMES.DARK ? theme.colors.logoGradient.first : theme.colors.border};
    }

    @media only screen and (${device.md}) {
        margin: ${({ theme }) => theme.margins.base} 0;
    }
`;
