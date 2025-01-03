import { Link } from "react-router";
import styled from "styled-components";

import { button } from "@styles/mixins/button";
import { error } from "@styles/mixins/error";

export const StyledLayout = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export const StyledMain = styled.main`
    flex-grow: 1;
`;

export const StyledCenterer = styled.div`
    max-width: fit-content;
    margin: 0 auto;
    margin-top: ${({ theme }) => theme.margins.xxl};
`;

export const StyledError = styled.p`
    ${error}
    font-size: ${({ theme }) => theme.fonts.size.md};
`;

export const StyledLink = styled(Link)`
    ${button}
    display: block;
    max-width: fit-content;
    margin: 0 auto;
    margin-top: ${({ theme }) => theme.margins.md};
`;
