import { FC, memo } from "react";

import { Loader } from "@components/Loader/Loader.tsx";
import { Toast } from "@components/Toast/Toast.tsx";
import { DEFAULT_TOAST_LIFETIME, STOCKS_OPTIONS } from "@constants/timelinePage.ts";
import { useModal } from "@hooks/useModal.ts";
import CurrentStocksCard from "@pages/Timeline/ChartSection/CurrentStocksCard";
import DataChart from "@pages/Timeline/ChartSection/DataChart";
import EditChartDataModal from "@pages/Timeline/ChartSection/EditChartDataModal";

import { useNotificationToast } from "./_hooks/useNotificationToast.ts";
import { StocksSelect } from "./StocksSelect/StocksSelect.tsx";
import { StyledButton, StyledControls, StyledLoader } from "./styled.ts";

type ChartDataProps = {
    chartData: FormattedStocksData;
    isLoading: boolean;
    currentStock: StockType;
    handleSelectStock: (option: string) => void;
    handleUpdateData: (newData: FormattedStocksData) => void;
};

export const ChartSection: FC<ChartDataProps> = ({
    chartData,
    isLoading,
    currentStock,
    handleSelectStock,
    handleUpdateData,
}) => {
    const { isModalOpen, openModal, closeModal } = useModal();

    const { isToastVisible } = useNotificationToast();

    return (
        <section>
            {isToastVisible && (
                <Toast lifetimeInSeconds={DEFAULT_TOAST_LIFETIME}>
                    <p>Data was changed successfully</p>
                </Toast>
            )}
            {chartData && (
                <>
                    <StyledControls>
                        <CurrentStocksCard stock={currentStock} />
                        <StocksSelect
                            options={STOCKS_OPTIONS}
                            currentStock={currentStock}
                            onSelect={handleSelectStock}
                        />
                        <StyledButton onClick={openModal}>Edit chart data</StyledButton>
                        {isModalOpen && (
                            <EditChartDataModal
                                currentStock={currentStock}
                                data={chartData}
                                onUpdateData={handleUpdateData}
                                onClose={closeModal}
                            />
                        )}
                    </StyledControls>
                    {isLoading && (
                        <StyledLoader>
                            <Loader variant="md" />
                        </StyledLoader>
                    )}
                    {!isLoading && <DataChart chartData={chartData} />}
                </>
            )}
        </section>
    );
};

export const MemoizedChartSection = memo(ChartSection);
