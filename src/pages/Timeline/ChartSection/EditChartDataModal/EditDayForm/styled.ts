import styled from "styled-components";

export const StyledForm = styled.form`
    margin-top: ${({ theme }) => theme.margins.base};
    padding: 0 ${({ theme }) => theme.paddings.xs};
`;

export const StyledInputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.margins.sm};
`;
