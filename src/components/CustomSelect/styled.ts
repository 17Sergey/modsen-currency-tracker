import styled from "styled-components";

import ChevronIcon from "@assets/icons/ChevronIcon.svg";
import { button } from "@styles/mixins/button";

export const StyledSelectWrapper = styled.div`
    position: relative;
    max-width: 100%;
    cursor: pointer;
`;

export const StyleCustomSelect = styled.div`
    ${button}
    padding: ${({ theme }) => theme.paddings.m} ${({ theme }) => theme.paddings.base};
    font-weight: ${({ theme }) => theme.fonts.weight.semibold};
`;

export const StyledSelectVisualPart = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({ theme }) => theme.margins.md};
`;

export const StyledSelectedOption = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.margins.sm};
`;

export const StyledChevronIcon = styled(ChevronIcon)`
    width: ${({ theme }) => theme.widths.icons.xs};
    height: ${({ theme }) => theme.widths.icons.xs};
    transform: rotate(90deg);
    fill: ${({ theme }) => theme.colors.textPrimary};
`;

export const StyledDropdownList = styled.div`
    position: absolute;
    bottom: -0.25rem;
    left: 0;
    right: 0;
    transform: translateY(100%);

    background-color: ${({ theme }) => theme.colors.backgroundNeutral};
    border-radius: ${({ theme }) => theme.paddings.sm};

    max-height: 150px;
    overflow-y: auto;
`;

export const StyledDropdownOption = styled.li`
    transition: 0.2s ease all;
    padding: ${({ theme }) => theme.paddings.m} ${({ theme }) => theme.paddings.base};
    border-radius: ${({ theme }) => theme.paddings.sm};

    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.margins.sm};

    &:hover {
        background-color: ${({ theme }) => theme.colors.textNeutralTransparent};
    }
`;

export const StyledIcon = styled.div`
    width: ${({ theme }) => theme.widths.icons.sm};
    height: ${({ theme }) => theme.widths.icons.sm};
`;
