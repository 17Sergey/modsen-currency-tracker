import styled from "styled-components";

import { button } from "@styles/mixins/button";

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
