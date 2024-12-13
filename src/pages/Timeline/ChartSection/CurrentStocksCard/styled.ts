import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.margins.m};
    max-width: 100%;
    min-width: 200px;
`;

export const StyledIcon = styled.div`
    width: ${({ theme }) => theme.widths.icons.xl};
    height: ${({ theme }) => theme.widths.icons.xl};
    flex-shrink: 0;
`;

export const StyledText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const StyledName = styled.p`
    font-size: ${({ theme }) => theme.fonts.size.lg};
    font-weight: ${({ theme }) => theme.fonts.weight.semibold};
`;

export const StyledCode = styled.p`
    margin-top: ${({ theme }) => theme.margins.sm};
    font-size: ${({ theme }) => theme.fonts.size.base};
    color: ${({ theme }) => theme.colors.textFooter};
`;
