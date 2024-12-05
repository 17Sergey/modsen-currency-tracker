import LayoutContainer from "@components/LayoutContainer";

import {
    StyledBlock,
    StyledCaption,
    StyledCircleInner,
    StyledCircleMiddle,
    StyledCircleOut,
    StyledPulse,
} from "./styled.ts";

export const LastUpdated = () => (
    <>
        <LayoutContainer>
            <StyledBlock>
                <StyledPulse aria-hidden="true">
                    <StyledCircleOut />
                    <StyledCircleMiddle />
                    <StyledCircleInner />
                </StyledPulse>
                <StyledCaption>Last updated at 11:59pm</StyledCaption>
            </StyledBlock>
        </LayoutContainer>
    </>
);
