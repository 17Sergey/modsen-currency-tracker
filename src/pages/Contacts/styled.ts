import styled from "styled-components";

import { headingMd } from "@styles/mixins/headings/headingMd";
import { headingXl } from "@styles/mixins/headings/headingXl";

export const SectionHeading = styled.h2`
    ${headingXl}
    margin-top: ${({ theme }) => theme.margins.base};
`;

export const StyledInfoList = styled.ul`
    margin-top: ${({ theme }) => theme.margins.base};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.margins.md};
`;

export const StyledAddress = styled.address`
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.margins.sm};
    align-items: center;

    margin-top: ${({ theme }) => theme.margins.base};
`;

export const StyledInfoItemHeading = styled.p`
    ${headingMd}
`;

export const StyledStrong = styled.strong`
    font-weight: ${({ theme }) => theme.fonts.weight.semibold};
`;
