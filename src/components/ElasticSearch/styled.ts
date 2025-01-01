import styled from "styled-components";

import CrossIcon from "@assets/icons/CrossIcon.svg";
import SearchIcon from "@assets/icons/SearchIcon.svg";
import { elasticOption } from "@styles/mixins/elasticOption";
import { input } from "@styles/mixins/input";

export const StyledElasticWrapper = styled.div`
    position: relative;
    margin: ${({ theme }) => theme.margins.base} 0;
`;

export const StyledInputWrapper = styled.div`
    position: relative;
`;

export const StyledInput = styled.input`
    ${input}

    width: 100%;
    background-color: ${({ theme }) => theme.colors.inputBg};
    font-size: ${({ theme }) => theme.fonts.size.base};
    font-weight: ${({ theme }) => theme.fonts.weight.regular};
    color: ${({ theme }) => theme.colors.textPrimary};

    padding-right: 40px;

    &:focus {
        outline: none;
        box-shadow: 0 0 5px ${({ theme }) => theme.colors.textNeutralTransparent};
    }
`;

export const StyledOptionsList = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 100;

    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.backgroundNeutral};
    border-radius: ${({ theme }) => theme.paddings.sm};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

export const StyledOption = styled.button`
    ${elasticOption}
`;

export const StyledInputButton = styled.button`
    position: absolute;
    right: ${({ theme }) => theme.paddings.sm};
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;

    width: ${({ theme }) => theme.widths.icons.xxs};
    height: ${({ theme }) => theme.widths.icons.xxs};
`;

export const StyledSearchIcon = styled(SearchIcon)`
    fill: ${({ theme }) => theme.colors.textPrimary};

    transform: scale(0.8);

    width: 100%;
    height: 100%;
`;

export const StyledCrossIcon = styled(CrossIcon)`
    width: 100%;
    height: 100%;
`;
