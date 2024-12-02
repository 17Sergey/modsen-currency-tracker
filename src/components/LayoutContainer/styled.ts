import styled from "styled-components";

export const StyledContainer = styled.div`
    max-width: ${({ theme }) => theme.widths.container};
    width: 80%;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.paddings.container};
`;
