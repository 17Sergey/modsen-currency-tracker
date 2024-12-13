import { FC, useMemo, useState } from "react";

import Modal from "@components/Modal";
import EditDayForm from "@pages/Timeline/ChartSection/EditChartDataModal/EditDayForm";

import { CurrentStocksCard } from "../CurrentStocksCard/CurrentStocksCard.tsx";

import {
    StyledBox,
    StyledButtons,
    StyledCloseBtn,
    StyledCrossIcon,
    StyledDataFormWrapper,
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

    const goPreviousDay = () => {
        if (currentDayIndex === 0) return;
        setCurrentDayIndex((curr) => curr - 1);
    };

    const goNextDay = () => {
        if (currentDayIndex === newData.length - 1) return;
        setCurrentDayIndex((curr) => curr + 1);
    };

    const handleSelectDay = (day: string) => {
        const foundIndex = newData.findIndex(({ date }) => date === day);
        if (foundIndex === -1) return;

        setCurrentDayIndex(foundIndex);
    };

    const handleEditDay = (dayData: FormattedStock) => {
        newData[currentDayIndex] = dayData;
        if (!isDataModified) setIsDataModified(true);
    };

    const handleUpdateBtn = () => {
        if (!isDataModified) return;

        onUpdateData(newData);
    };

    return (
        <Modal onClose={onClose}>
            <StyledBox>
                <StyledCloseBtn aria-label="Close modal" onClick={onClose}>
                    <StyledCrossIcon />
                </StyledCloseBtn>
                <CurrentStocksCard stock={currentStock} />
                <StyledScrollableContent>
                    <StyledDataFormWrapper>
                        <EditDayForm
                            dataDays={dataDays}
                            dayData={currentDay}
                            onEdit={handleEditDay}
                            onSelectDay={handleSelectDay}
                        />
                    </StyledDataFormWrapper>
                    <StyledButtons>
                        <StyledDayButtons>
                            <StyledDayButton onClick={goPreviousDay}>Previous day</StyledDayButton>
                            <StyledDayButton onClick={goNextDay}>Next day</StyledDayButton>
                        </StyledDayButtons>
                        <StyledUpdateButton onClick={handleUpdateBtn}>Update data</StyledUpdateButton>
                    </StyledButtons>
                </StyledScrollableContent>
            </StyledBox>
        </Modal>
    );
};
