import React, { Component } from "react";

import Modal from "@components/Modal";
import { DATA_CY } from "@constants/cypress.ts";
import { EDIT_DAY_BUTTONS } from "@constants/timelinePage.ts";
import EditDayForm from "@pages/Timeline/ChartSection/EditChartDataModal/EditDayForm";
import { ChartPublisher } from "@utils/Publisher/ChartPublisher.ts";

import { CurrentStocksCard } from "../CurrentStocksCard/CurrentStocksCard.tsx";

import {
    StyledBoxWrapper,
    StyledButton,
    StyledButtons,
    StyledCloseBtn,
    StyledCrossIcon,
    StyledDayButtons,
    StyledScrollableContent,
    StyledUpdateButton,
} from "./styled.ts";

type EditChartDataModalProps = {
    currentStock: StockType;
    data: FormattedStocksData;
    onClose: VoidFunction;
    onUpdateData: (data: FormattedStocksData) => void;
};

type EditChartDataModalState = {
    currentDayIndex: number;
    isDataModified: boolean;
    disabledBtn: string | null;
};

export class EditChartDataModal extends Component<EditChartDataModalProps, EditChartDataModalState> {
    private newData: FormattedStocksData;

    constructor(props: EditChartDataModalProps) {
        super(props);
        this.newData = [...props.data];
        this.state = {
            currentDayIndex: 0,
            isDataModified: false,
            disabledBtn: null,
        };
    }

    goPreviousDay = () => {
        const { currentDayIndex } = this.state;
        if (currentDayIndex === 0) {
            this.setState({ disabledBtn: EDIT_DAY_BUTTONS.PREVIOUS });
            return;
        }
        this.setState((prevState) => ({
            currentDayIndex: prevState.currentDayIndex - 1,
            disabledBtn: null,
        }));
    };

    goNextDay = () => {
        const { currentDayIndex } = this.state;
        if (currentDayIndex === this.newData.length - 1) {
            this.setState({ disabledBtn: EDIT_DAY_BUTTONS.NEXT });
            return;
        }
        this.setState((prevState) => ({
            currentDayIndex: prevState.currentDayIndex + 1,
            disabledBtn: null,
        }));
    };

    handleSelectDay = (day: string) => {
        const foundIndex = this.newData.findIndex(({ date }) => date === day);
        if (foundIndex === -1) return;

        this.setState({ currentDayIndex: foundIndex, disabledBtn: null });
    };

    handleEditDay = (dayData: FormattedStock) => {
        const { currentDayIndex, isDataModified } = this.state;
        this.newData[currentDayIndex] = dayData;
        if (!isDataModified) {
            this.setState({ isDataModified: true });
        }
    };

    handleUpdateBtn = () => {
        const { isDataModified } = this.state;
        if (!isDataModified) return;

        ChartPublisher.notifySubscribers();
        this.props.onUpdateData(this.newData);

        this.setState({ isDataModified: false });
    };

    render() {
        const { currentStock, onClose } = this.props;
        const { currentDayIndex, disabledBtn } = this.state;
        const currentDay = this.newData[currentDayIndex];
        const dataDays = this.props.data.map(({ date }) => date);

        return (
            <Modal onClose={onClose}>
                <StyledBoxWrapper data-cy={DATA_CY.EDIT_CHART_MODAL}>
                    <StyledCloseBtn aria-label="Close modal" onClick={onClose} data-cy={DATA_CY.CLOSE_MODAL}>
                        <StyledCrossIcon />
                    </StyledCloseBtn>
                    <CurrentStocksCard stock={currentStock} />
                    <StyledScrollableContent>
                        <EditDayForm
                            dataDays={dataDays}
                            dayData={currentDay}
                            onEdit={this.handleEditDay}
                            onSelectDay={this.handleSelectDay}
                        />
                    </StyledScrollableContent>
                    <StyledButtons>
                        <StyledDayButtons>
                            <StyledButton
                                disabled={disabledBtn === EDIT_DAY_BUTTONS.PREVIOUS}
                                onClick={this.goPreviousDay}
                                data-cy={DATA_CY.PREV_DAY_BTN}
                            >
                                Previous day
                            </StyledButton>
                            <StyledButton
                                disabled={disabledBtn === EDIT_DAY_BUTTONS.NEXT}
                                onClick={this.goNextDay}
                                data-cy={DATA_CY.NEXT_DAY_BTN}
                            >
                                Next day
                            </StyledButton>
                        </StyledDayButtons>
                        <StyledUpdateButton
                            onClick={this.handleUpdateBtn}
                            disabled={!this.state.isDataModified}
                            data-cy={DATA_CY.UPDATE_CHART_BTN}
                        >
                            Update data
                        </StyledUpdateButton>
                    </StyledButtons>
                </StyledBoxWrapper>
            </Modal>
        );
    }
}
