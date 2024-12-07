import styled from "styled-components";

export const StyledCardsSection = styled.section``;

export const StyledSectionHeading = styled.h2`
    font-weight: ${({ theme }) => theme.fonts.weight.light};
    font-size: ${({ theme }) => theme.fonts.size.md};

    position: relative;

    margin-bottom: ${({ theme }) => theme.margins.md};

    &::before {
        content: "";
        position: absolute;
        bottom: -0.5rem;
        left: 0;

        width: 100%;
        min-width: fit-content;
        height: 2px;

        background-color: ${({ theme }) => theme.colors.border};
    }
`;
