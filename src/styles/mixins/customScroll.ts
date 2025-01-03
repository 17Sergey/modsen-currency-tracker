import { css } from "styled-components";

export const customScroll = css`
    &::-webkit-scrollbar {
        width: ${({ theme }) => theme.widths.customScroll};
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.colors.border};
        border-radius: 10px;
    }

    scrollbar-width: thin;
    scrollbar-color: ${(props) => props.theme.colors.border} ${(props) => props.theme.colors.gray};
`;
