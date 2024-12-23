import { Component, memo } from "react";

import { Loader } from "@components/Loader/Loader.tsx";
import { Toast } from "@components/Toast/Toast.tsx";
import { DEFAULT_TOAST_LIFETIME, STOCKS_OPTIONS } from "@constants/timelinePage.ts";
import CurrentStocksCard from "@pages/Timeline/ChartSection/CurrentStocksCard";
import EditChartDataModal from "@pages/Timeline/ChartSection/EditChartDataModal";
import { ChartPublisher } from "@utils/Publisher/ChartPublisher.ts";

import DataChart from "./DataChart/DataChart.tsx";
import { StocksSelect } from "./StocksSelect/StocksSelect.tsx";
import { StyledButton, StyledControls, StyledLoader } from "./styled.ts";

type ChartDataProps = {
    chartData: FormattedStocksData;
    isLoading: boolean;
    currentStock: StockType;
    handleSelectStock: (option: string) => void;
    handleUpdateData: (newData: FormattedStocksData) => void;
};

type ChartDataState = {
    isModalOpen: boolean;
    isToastVisible: boolean;
};

class ChartSection extends Component<ChartDataProps, ChartDataState> {
    private toastTimeout: NodeJS.Timeout | null = null;

    constructor(props: ChartDataProps) {
        super(props);
        this.state = {
            isModalOpen: false,
            isToastVisible: false,
        };
    }

    componentDidMount() {
        ChartPublisher.subscribe(this.showNotification);
    }

    componentWillUnmount() {
        ChartPublisher.unsubscribe(this.showNotification);
        if (this.toastTimeout) {
            clearTimeout(this.toastTimeout);
        }
    }

    showNotification = () => {
        this.setState({ isToastVisible: true }, () => {
            this.toastTimeout = setTimeout(() => {
                this.setState({ isToastVisible: false });
            }, DEFAULT_TOAST_LIFETIME * 1000);
        });
    };

    openModal = () => {
        this.setState({ isModalOpen: true });
    };

    closeModal = () => {
        this.setState({ isModalOpen: false });
    };

    render() {
        const { chartData, isLoading, currentStock, handleSelectStock, handleUpdateData } = this.props;
        const { isModalOpen, isToastVisible } = this.state;

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
                            <StyledButton onClick={this.openModal}>Edit chart data</StyledButton>
                            {isModalOpen && (
                                <EditChartDataModal
                                    currentStock={currentStock}
                                    data={chartData}
                                    onUpdateData={handleUpdateData}
                                    onClose={this.closeModal}
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
    }
}

export const MemoizedChartSection = memo(ChartSection);
