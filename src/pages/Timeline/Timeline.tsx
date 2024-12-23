import { ErrorBoundary } from "react-error-boundary";

import LastUpdated from "@components/LastUpdated";
import LayoutContainer from "@components/LayoutContainer";
import ChartSection from "@pages/Timeline/ChartSection";

import { useChartData } from "./_hooks/useChartData.ts";
import { useCurrentStock } from "./_hooks/useCurrentStock.ts";
import { StyledError } from "./styled.ts";

export const Timeline = () => {
    const { currentStock, handleSelectStock } = useCurrentStock();

    const { chartData, isLoading, isFetching, error, lastUpdatedAt, handleUpdateData } = useChartData(currentStock);

    const dataExists = Boolean(chartData);
    const isLoadingOrRefetching = isLoading || isFetching;
    const errorMessage = error ? "We failed to fetch stocks data" : null;

    const errorRedrerProp = (
        <p>
            Error occurred. <StyledError>{errorMessage}</StyledError>
        </p>
    );

    return (
        <LayoutContainer>
            <LastUpdated
                dataExists={dataExists}
                lastUpdatedAt={lastUpdatedAt}
                isLoading={isLoading}
                errorMessage={errorMessage}
            />
            <ErrorBoundary fallback={errorRedrerProp}>
                {!error && chartData && (
                    <ChartSection
                        chartData={chartData}
                        isLoading={isLoadingOrRefetching}
                        currentStock={currentStock}
                        handleSelectStock={handleSelectStock}
                        handleUpdateData={handleUpdateData}
                    />
                )}
            </ErrorBoundary>
        </LayoutContainer>
    );
};
