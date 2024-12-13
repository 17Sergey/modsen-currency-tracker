import styled from "styled-components";

import { input } from "@styles/mixins/input";

export const StyledInput = styled.input`
    ${input}
    font-size: ${({ theme }) => theme.fonts.size.base};
`;

export const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
`;
