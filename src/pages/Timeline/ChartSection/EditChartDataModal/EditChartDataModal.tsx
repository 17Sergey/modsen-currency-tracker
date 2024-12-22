import { FC, useMemo, useState } from "react";

import Modal from "@components/Modal";
import { EDIT_DAY_BUTTONS } from "@constants/timelinePage.ts";
import EditDayForm from "@pages/Timeline/ChartSection/EditChartDataModal/EditDayForm";
import { ChartPublisher } from "@utils/Publisher/ChartPublisher.ts";

import { CurrentStocksCard } from "../CurrentStocksCard/CurrentStocksCard.tsx";

import {
    StyledBoxWrapper,
    StyledButtons,
    StyledCloseBtn,
    StyledCrossIcon,
    StyledDayButton,
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

export const EditChartDataModal: FC<EditChartDataModalProps> = ({ currentStock, data, onUpdateData, onClose }) => {
    const newData = useMemo(() => [...data], [data]);
    const dataDays = useMemo(() => data.map(({ date }) => date), [data]);

    const [isDataModified, setIsDataModified] = useState(false);

    const [currentDayIndex, setCurrentDayIndex] = useState(0);

    const currentDay = newData[currentDayIndex];

    const [disabledBtn, setDisabledBtn] = useState<string | null>(null);

    const resetDisabled = () => {
        setDisabledBtn(null);
    };

    const goPreviousDay = () => {
        if (currentDayIndex === 0) {
            setDisabledBtn(EDIT_DAY_BUTTONS.PREVIOUS);
            return;
        }
        setCurrentDayIndex((curr) => curr - 1);
        if (disabledBtn) resetDisabled();
    };

    const goNextDay = () => {
        if (currentDayIndex === newData.length - 1) {
            setDisabledBtn(EDIT_DAY_BUTTONS.NEXT);
            return;
        }
        setCurrentDayIndex((curr) => curr + 1);
        if (disabledBtn) resetDisabled();
    };

    const handleSelectDay = (day: string) => {
        const foundIndex = newData.findIndex(({ date }) => date === day);
        if (foundIndex === -1) return;

        setCurrentDayIndex(foundIndex);
        if (disabledBtn) resetDisabled();
    };

    const handleEditDay = (dayData: FormattedStock) => {
        newData[currentDayIndex] = dayData;
        if (!isDataModified) setIsDataModified(true);
    };

    const handleUpdateBtn = () => {
        if (!isDataModified) return;

        ChartPublisher.notifySubscribers();
        onUpdateData(newData);

        setIsDataModified(false);
    };

    return (
        <Modal onClose={onClose}>
            <StyledBoxWrapper>
                <StyledCloseBtn aria-label="Close modal" onClick={onClose}>
                    <StyledCrossIcon />
                </StyledCloseBtn>
                <CurrentStocksCard stock={currentStock} />
                <StyledScrollableContent>
                    <EditDayForm
                        dataDays={dataDays}
                        dayData={currentDay}
                        onEdit={handleEditDay}
                        onSelectDay={handleSelectDay}
                    />
                </StyledScrollableContent>
                <StyledButtons>
                    <StyledDayButtons>
                        <StyledDayButton disabled={disabledBtn === EDIT_DAY_BUTTONS.PREVIOUS} onClick={goPreviousDay}>
                            Previous day
                        </StyledDayButton>
                        <StyledDayButton disabled={disabledBtn === EDIT_DAY_BUTTONS.NEXT} onClick={goNextDay}>
                            Next day
                        </StyledDayButton>
                    </StyledDayButtons>
                    <StyledUpdateButton onClick={handleUpdateBtn} disabled={!isDataModified}>
                        Update data
                    </StyledUpdateButton>
                </StyledButtons>
            </StyledBoxWrapper>
        </Modal>
    );
};
