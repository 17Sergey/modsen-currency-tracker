import LayoutContainer from "@components/LayoutContainer";

import {
    StyledCaption,
    StyledCircleInner,
    StyledCircleMiddle,
    StyledCircleOut,
    StyledPulse,
    StyledSection,
} from "./styled.ts";

export const LastUpdated = () => (
    <>
        <LayoutContainer>
            <StyledSection>
                <StyledPulse aria-hidden="true">
                    <StyledCircleOut />
                    <StyledCircleMiddle />
                    <StyledCircleInner />
                </StyledPulse>
                <StyledCaption>Last updated at 11:59pm</StyledCaption>
            </StyledSection>
        </LayoutContainer>
    </>
);
