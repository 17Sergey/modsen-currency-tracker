import { css } from "styled-components";

import { customScroll } from "../customScroll.ts";

export const scrollableContent = css`
    margin-top: ${({ theme }) => theme.margins.base};
    overflow-y: auto;
    ${customScroll};
    flex-grow: 1;
`;
