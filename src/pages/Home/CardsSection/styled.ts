import styled from "styled-components";

import { headingMd } from "@styles/mixins/headings/headingMd";

export const StyledCardsSection = styled.section``;

export const StyledSectionHeading = styled.h2`
    ${headingMd}
`;

export const StyledError = styled.span`
    color: ${({ theme }) => theme.colors.chartDown};
`;
