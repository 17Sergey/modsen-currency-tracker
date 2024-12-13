import styled from "styled-components";

import { button } from "@styles/mixins/button";
import { customScroll } from "@styles/mixins/customScroll";

export const StyledButton = styled.button`
    ${button}
`;

export const StyledControls = styled.div`
    margin: ${({ theme }) => theme.margins.md} 0;
    display: flex;
    gap: ${({ theme }) => theme.margins.md};
    align-items: center;
    flex-wrap: wrap;
`;

export const StyledChart = styled.div`
    ${customScroll}
    max-width: 100%;
    overflow-x: auto;

    scrollbar-color: ${(props) => props.theme.colors.primary} ${(props) => props.theme.colors.border};
`;
