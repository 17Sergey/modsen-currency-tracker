import LayoutContainer from "@components/LayoutContainer";
import { Loader } from "@components/Loader/Loader.tsx";
import { useGetCurrenciesQuery } from "@store/api/currencyAPI.ts";
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

export const LastUpdated = () => {
    const { data, isLoading, error } = useGetCurrenciesQuery();
    const updatedAt = data?.meta.last_updated_at || "";

    return (
        <>
            <LayoutContainer>
                <StyledSection>
                    <StyledPulse aria-hidden="true">
                        <StyledCircleOut />
                        <StyledCircleMiddle />
                        <StyledCircleInner />
                    </StyledPulse>
                    <StyledCaption>
                        {error && (
                            <>
                                Last update is unkown. <StyledError>We failed fetching the data...</StyledError>
                            </>
                        )}
                        {isLoading && (
                            <StyledLoading>
                                Last updated at <Loader variant="sm" />
                            </StyledLoading>
                        )}
                        {data && (
                            <>
                                Last updated {dateHelper.extractDate(updatedAt)} at&nbsp;
                                {dateHelper.extractHoursAndMinutes(updatedAt)}
                            </>
                        )}
                    </StyledCaption>
                </StyledSection>
            </LayoutContainer>
        </>
    );
};
