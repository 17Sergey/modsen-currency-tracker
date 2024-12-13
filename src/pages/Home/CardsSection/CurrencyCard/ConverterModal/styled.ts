import styled from "styled-components";

import CrossIcon from "@assets/icons/CrossIcon.svg";
import ExchangeIcon from "@assets/icons/ExchangeIcon.svg";
import { THEMES } from "@constants/constants";
import { device } from "@styles/breakpoints";
import { customScroll } from "@styles/mixins/customScroll";
import { modalBox } from "@styles/mixins/modal";

export const StyledBox = styled.div`
    ${modalBox}
    ${customScroll}


    width: 50vw;
    padding: ${({ theme }) => theme.paddings.xl};
    background-color: ${({ theme }) =>
        theme.name === THEMES.DARK ? theme.colors.border : theme.colors.backgroundNeutral};
    border-radius: ${({ theme }) => theme.paddings.sm};

    max-height: 95vh;
    overflow-y: auto;

    @media only screen and (${device.lg}) {
        width: 80vw;
    }
`;

export const StyledWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
`;

export const StyledCloseBtn = styled.button`
    position: fixed;
    top: 1rem;
    right: 0rem;

    width: ${({ theme }) => theme.widths.icons.base};
    height: ${({ theme }) => theme.widths.icons.base};
`;

export const StyledCrossIcon = styled(CrossIcon)`
    width: 100%;
    height: 100%;
    stroke: ${({ theme }) => theme.colors.textPrimary};
    color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StyledHeading = styled.h2`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: ${({ theme }) => theme.fonts.weight.regular};
    font-size: ${({ theme }) => theme.fonts.size.lg};
`;

export const StyledForm = styled.form`
    display: block;

    margin-top: ${({ theme }) => theme.margins.md};
`;

export const StyledExchangeIcon = styled(ExchangeIcon)`
    width: ${({ theme }) => theme.widths.icons.sm};
    height: ${({ theme }) => theme.widths.icons.sm};
    fill: ${({ theme }) => theme.colors.textPrimary};

    margin: ${({ theme }) => theme.margins.base} 0;
`;
