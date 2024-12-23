import styled from "styled-components";

import CrossIcon from "@assets/icons/CrossIcon.svg";
import ExchangeIcon from "@assets/icons/ExchangeIcon.svg";
import { device } from "@styles/breakpoints";
import { closeBtn } from "@styles/mixins/modal/closeBtn";
import { crossIcon } from "@styles/mixins/modal/crossIcon";
import { modalBox } from "@styles/mixins/modal/modalBox";
import { scrollableContent } from "@styles/mixins/modal/scrollableContent";

export const StyledBox = styled.div`
    ${modalBox}

    max-height: 90vh;

    @media only screen and (${device.lg}) {
        width: 80vw;
    }
`;

export const StyledHeading = styled.h2`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: ${({ theme }) => theme.fonts.weight.regular};
    font-size: ${({ theme }) => theme.fonts.size.lg};

    padding-left: ${({ theme }) => theme.paddings.xs};
`;

export const StyledScrollableContent = styled.div`
    ${scrollableContent}
    padding-left: ${({ theme }) => theme.paddings.xs};
`;

export const StyledWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
`;

export const StyledCloseBtn = styled.button`
    ${closeBtn}
    top: 0.5rem;
    right: 0.5rem;
`;

export const StyledCrossIcon = styled(CrossIcon)`
    ${crossIcon}
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
