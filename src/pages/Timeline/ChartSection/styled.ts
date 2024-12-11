import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.colors.backgroundNeutral};
    padding: ${({ theme }) => theme.paddings.base} ${({ theme }) => theme.paddings.xl};
    border-radius: ${({ theme }) => theme.paddings.sm};
    transition: 0.2s ease all;

    &:hover {
        background-color: ${({ theme }) => theme.colors.inputBg};
        opacity: 0.8;
    }
    &:active {
        transform: scale(0.9);
    }
`;

export const StyledControls = styled.div`
    margin: ${({ theme }) => theme.margins.md} 0;
    display: flex;
    gap: ${({ theme }) => theme.margins.md};
    align-items: center;
`;

export const StyledChart = styled.div`
    max-width: 100%;
    overflow-x: auto;
`;
