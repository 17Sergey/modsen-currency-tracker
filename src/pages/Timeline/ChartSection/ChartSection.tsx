import { FC } from "react";

import { STOCKS_OPTIONS } from "@constants/constants";
import { useModal } from "@hooks/useModal.ts";
import CurrentStocksCard from "@pages/Timeline/ChartSection/CurrentStocksCard";
import DataChart from "@pages/Timeline/ChartSection/DataChart";
import EditChartDataModal from "@pages/Timeline/ChartSection/EditChartDataModal";

import { useChartData } from "./hooks/useChartData.ts";
import { useCurrentStock } from "./hooks/useCurrentStock.ts";
import { StocksSelect } from "./StocksSelect/StocksSelect.tsx";
import { StyledButton, StyledChart, StyledControls } from "./styled.ts";

export const ChartSection: FC = () => {
    const { isModalOpen, openModal, closeModal } = useModal();

    const { currentStock, handleSelectStock } = useCurrentStock();

    const { chartData, handleUpdateData } = useChartData();

    return (
        <section>
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
            <StyledChart>
                <DataChart chartData={chartData} />
            </StyledChart>
        </section>
    );
};
