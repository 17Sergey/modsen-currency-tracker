import styled from "styled-components";

import CrossIcon from "@assets/icons/CrossIcon.svg";
import { THEMES } from "@constants/constants";
import { device } from "@styles/breakpoints";
import { button } from "@styles/mixins/button";
import { closeBtn } from "@styles/mixins/modal/closeBtn";
import { crossIcon } from "@styles/mixins/modal/crossIcon";
import { modalBox } from "@styles/mixins/modal/modalBox";
import { scrollableContent } from "@styles/mixins/modal/scrollableContent";

export const StyledBoxWrapper = styled.div`
    ${modalBox}
`;

export const StyledCloseBtn = styled.button`
    ${closeBtn}
`;

export const StyledScrollableContent = styled.div`
    ${scrollableContent}
`;

export const StyledCrossIcon = styled(CrossIcon)`
    ${crossIcon}
`;

export const StyledButtons = styled.div`
    margin-top: ${({ theme }) => theme.margins.md};
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media only screen and (${device.md}) {
        display: block;
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

export const StyledDayButton = styled(StyledButton)``;

export const StyledDayButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({ theme }) => theme.margins.sm};
`;

export const StyledUpdateButton = styled(StyledButton)`
    background-color: ${({ theme }) =>
        theme.name === THEMES.DARK ? theme.colors.updatedAtPulses.inner : theme.colors.border};

    &:hover {
        background-color: ${({ theme }) =>
            theme.name === THEMES.DARK ? theme.colors.logoGradient.first : theme.colors.border};
    }

    @media only screen and (${device.md}) {
        margin-top: ${({ theme }) => theme.margins.base};
    }
`;
