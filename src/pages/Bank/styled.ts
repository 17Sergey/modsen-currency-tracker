import styled from "styled-components";

import { elasticOption } from "@styles/mixins/elasticOption";
import { headingXl } from "@styles/mixins/headings/headingXl";

export const StyledSection = styled.section`
    margin-top: ${({ theme }) => theme.margins.xl};
`;

export const StyledHeading = styled.h2`
    ${headingXl}
    text-align: center;
`;

export const StyledElastic = styled.div`
    margin-top: ${({ theme }) => theme.margins.base};

    width: 100%;
    max-width: 350px;

    margin-left: auto;
    margin-right: auto;
`;

export const StyledMap = styled.div`
    margin-top: ${({ theme }) => theme.margins.xl};
`;

export const StyledCurrencyOptionButton = styled.button`
    ${elasticOption}

    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.margins.base};

    :first-child {
        width: ${({ theme }) => theme.widths.icons.base};
        height: ${({ theme }) => theme.widths.icons.base};
    }
`;
