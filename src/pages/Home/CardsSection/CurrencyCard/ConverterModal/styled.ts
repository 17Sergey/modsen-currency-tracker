import styled from "styled-components";

import CrossIcon from "@assets/icons/CrossIcon.svg";
import ExchangeIcon from "@assets/icons/ExchangeIcon.svg";
import { device } from "@styles/breakpoints";
import { closeBtn } from "@styles/mixins/modal/closeBtn";
import { crossIcon } from "@styles/mixins/modal/crossIcon";
import { scrollableContent } from "@styles/mixins/modal/scrollableContent";
import { modalBox } from "@styles/mixins/modalBox";

export const StyledBox = styled.div`
    ${modalBox}

    max-height: 90vh;

    @media only screen and (${device.lg}) {
        width: 80vw;
    }
`;

export const StyledScrollableContent = styled.div`
    ${scrollableContent}
`;

export const StyledWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
`;

export const StyledCloseBtn = styled.button`
    ${closeBtn}
`;

export const StyledCrossIcon = styled(CrossIcon)`
    ${crossIcon}
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
