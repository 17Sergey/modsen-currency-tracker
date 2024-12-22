import LastUpdated from "@components/LastUpdated";
import LayoutContainer from "@components/LayoutContainer";
import ChartSection from "@pages/Timeline/ChartSection";

import { useChartData } from "./ChartSection/_hooks/useChartData.ts";
import { useCurrentStock } from "./ChartSection/_hooks/useCurrentStock.ts";

export const Timeline = () => {
    const { currentStock, handleSelectStock } = useCurrentStock();

    const { chartData, isLoading, isFetching, error, lastUpdatedAt, handleUpdateData } = useChartData(currentStock);

    const dataExists = Boolean(chartData);
    const isLoadingOrRefetching = isLoading || isFetching;
    const errorMessage = error ? "We failed to fetch stocks data" : null;

    return (
        <LayoutContainer>
            <LastUpdated
                dataExists={dataExists}
                lastUpdatedAt={lastUpdatedAt}
                isLoading={isLoading}
                errorMessage={errorMessage}
            />
            {!error && chartData && (
                <ChartSection
                    chartData={chartData}
                    isLoading={isLoadingOrRefetching}
                    currentStock={currentStock}
                    handleSelectStock={handleSelectStock}
                    handleUpdateData={handleUpdateData}
                />
            )}
        </LayoutContainer>
    );
};
