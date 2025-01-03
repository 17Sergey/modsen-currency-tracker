import { css } from "styled-components";

export const closeBtn = css`
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 1;

    width: ${({ theme }) => theme.widths.icons.base};
    height: ${({ theme }) => theme.widths.icons.base};
`;
