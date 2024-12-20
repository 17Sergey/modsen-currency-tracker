import { FC } from "react";

import { Toast } from "@components/Toast/Toast.tsx";
import { DEFAULT_TOAST_LIFETIME, STOCKS_OPTIONS } from "@constants/constants";
import { useModal } from "@hooks/useModal.ts";
import CurrentStocksCard from "@pages/Timeline/ChartSection/CurrentStocksCard";
import DataChart from "@pages/Timeline/ChartSection/DataChart";
import EditChartDataModal from "@pages/Timeline/ChartSection/EditChartDataModal";

import { useChartData } from "./_hooks/useChartData.ts";
import { useCurrentStock } from "./_hooks/useCurrentStock.ts";
import { useNotificationToast } from "./_hooks/useNotificationToast.ts";
import { StocksSelect } from "./StocksSelect/StocksSelect.tsx";
import { StyledButton, StyledControls } from "./styled.ts";

export const ChartSection: FC = () => {
    const { isModalOpen, openModal, closeModal } = useModal();

    const { currentStock, handleSelectStock } = useCurrentStock();

    const { chartData, handleUpdateData } = useChartData(currentStock);

    const { isToastVisible } = useNotificationToast();

    return (
        <section>
            {isToastVisible && (
                <Toast lifetimeInSeconds={DEFAULT_TOAST_LIFETIME}>
                    <p>Data was changed successfully</p>
                </Toast>
            )}
            <StyledControls>
                <CurrentStocksCard stock={currentStock} />
                <StocksSelect options={STOCKS_OPTIONS} currentStock={currentStock} onSelect={handleSelectStock} />
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
            <DataChart chartData={chartData} />
        </section>
    );
};
