import { FC } from "react";

import { CustomSelect } from "@components/CustomSelect/CustomSelect.tsx";
import { dateHelper } from "@utils/dateHelper.ts";

import { StyledDaySelect } from "./styled.ts";

type DaySelectProps = {
    days: string[];
    currentDay: string;
    onSelect: OnSelectCallback;
};

export const DaySelect: FC<DaySelectProps> = ({ days, currentDay, onSelect }) => {
    const formattedDays = days.map((day) => dateHelper.getPrettyDateFromStr(day));
    const formattedCurrentDay = dateHelper.getPrettyDateFromStr(currentDay);

    const handleSelectDay = (day: string) => {
        const formattedDay = dateHelper.getDateFromPrettyStr(day);
        onSelect(formattedDay);
    };

    return (
        <StyledDaySelect>
            <CustomSelect options={formattedDays} currenctValue={formattedCurrentDay} onSelect={handleSelectDay} />
        </StyledDaySelect>
    );
};
