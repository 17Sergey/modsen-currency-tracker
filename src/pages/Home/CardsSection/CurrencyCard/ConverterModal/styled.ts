import styled from "styled-components";

import CrossIcon from "@assets/icons/CrossIcon.svg";
import ExchangeIcon from "@assets/icons/ExchangeIcon.svg";
import { device } from "@styles/breakpoints";

export const StyledBox = styled.div`
    width: 50vw;
    padding: ${({ theme }) => theme.paddings.xl};
    background-color: ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.paddings.sm};

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
    position: relative;
    top: -0.5rem;
    right: -0.5rem;
    flex-shrink: 0;

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

export const StyledForm = styled.form``;

export const StyledInput = styled.input`
    max-width: 100%;
`;

export const StyledSelectedCurrency = styled.div`
    margin: ${({ theme }) => theme.margins.base} 0;
`;

export const StyledExchangeIcon = styled(ExchangeIcon)`
    width: ${({ theme }) => theme.widths.icons.sm};
    height: ${({ theme }) => theme.widths.icons.sm};
    fill: ${({ theme }) => theme.colors.textPrimary};
`;

export const StyledTargetCurrency = styled.div``;

export const StyledTargetFields = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: stretch;

    @media only screen and (${device.sm}) {
        gap: 0.5rem;
        margin: ${({ theme }) => theme.margins.sm} 0;
    }
`;

export const StyledSelect = styled.select`
    @media only screen and (${device.sm}) {
        order: -1;
        margin: ${({ theme }) => theme.margins.sm} 0;
    }
`;
