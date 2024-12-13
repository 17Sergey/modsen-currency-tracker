import styled from "styled-components";

export const StyledForm = styled.form``;

export const StyledInputsWrapper = styled.div`
    margin: ${({ theme }) => theme.margins.base} 0;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.margins.sm};
`;
