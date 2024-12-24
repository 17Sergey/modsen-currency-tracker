import { FC } from "react";

import { Loader } from "@components/Loader/Loader.tsx";
import { dateHelper } from "@utils/dateHelper.ts";

import {
    StyledCaption,
    StyledCircleInner,
    StyledCircleMiddle,
    StyledCircleOut,
    StyledError,
    StyledLoading,
    StyledPulse,
    StyledSection,
} from "./styled.ts";

type LastUpdatedProps = {
    dataExists: boolean;
    lastUpdatedAt: Date | null;
    isLoading: boolean;
    errorMessage: string | null;
};

export const LastUpdated: FC<LastUpdatedProps> = ({ dataExists, lastUpdatedAt, isLoading, errorMessage }) => (
    <StyledSection>
        <StyledPulse aria-hidden="true">
            <StyledCircleOut />
            <StyledCircleMiddle />
            <StyledCircleInner />
        </StyledPulse>
        <StyledCaption>
            {!isLoading && errorMessage && (
                <>
                    Last update is unkown. <StyledError>{errorMessage}</StyledError>
                </>
            )}
            {isLoading && (
                <StyledLoading>
                    Last updated at <Loader variant="sm" />
                </StyledLoading>
            )}
            {!isLoading && dataExists && lastUpdatedAt && (
                <>
                    Last updated {dateHelper.extractDateToPrettyString(lastUpdatedAt)} at&nbsp;
                    {dateHelper.extractHoursAndMinutes(lastUpdatedAt)}
                </>
            )}
        </StyledCaption>
    </StyledSection>
);
