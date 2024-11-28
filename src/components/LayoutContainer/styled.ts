import styled from "styled-components";

export const StyledContainer = styled.div`
    max-width: ${({ theme }) => theme.widths.container};
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.paddings.container};
`;
