import React, { Component } from "react";

import { CustomSelect } from "@components/CustomSelect/CustomSelect.tsx";
import { dateHelper } from "@utils/dateHelper.ts";

import { StyledDaySelect } from "./styled.ts";

type DaySelectProps = {
    days: string[];
    currentDay: string;
    onSelect: OnSelectCallback;
};

type DaySelectState = {
    formattedDays: string[];
    formattedCurrentDay: string;
};

export class DaySelect extends Component<DaySelectProps, DaySelectState> {
    constructor(props: DaySelectProps) {
        super(props);
        this.state = {
            formattedDays: DaySelect.formatDays(props.days),
            formattedCurrentDay: dateHelper.getPrettyDateFromStr(props.currentDay),
        };
    }

    static getDerivedStateFromProps(nextProps: DaySelectProps) {
        return {
            formattedDays: DaySelect.formatDays(nextProps.days),
            formattedCurrentDay: dateHelper.getPrettyDateFromStr(nextProps.currentDay),
        };
    }

    static formatDays(days: string[]): string[] {
        return days.map((day) => dateHelper.getPrettyDateFromStr(day));
    }

    handleSelectDay = (day: string) => {
        const formattedDay = dateHelper.getDateFromPrettyStr(day);
        this.props.onSelect(formattedDay);
    };

    render() {
        const { formattedDays, formattedCurrentDay } = this.state;

        return (
            <StyledDaySelect>
                <CustomSelect
                    options={formattedDays}
                    currenctValue={formattedCurrentDay}
                    onSelect={this.handleSelectDay}
                />
            </StyledDaySelect>
        );
    }
}
