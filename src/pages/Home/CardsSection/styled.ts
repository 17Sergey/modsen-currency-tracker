import styled from "styled-components";

import { headingMd } from "@styles/mixins/headings/headingMd";

export const StyledCardsSection = styled.section`
    margin-top: ${({ theme }) => theme.margins.md};
`;

export const StyledSectionHeading = styled.h2`
    ${headingMd}
`;

export const StyledError = styled.span`
    color: ${({ theme }) => theme.colors.chartDown};
`;
