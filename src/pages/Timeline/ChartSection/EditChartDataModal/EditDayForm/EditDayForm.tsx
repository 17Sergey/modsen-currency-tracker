import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";

import { EDIT_DAY_INPUTS } from "@constants/timelinePage.ts";
import { isValidNumber } from "@utils/isValidNumber.ts";

import { DaySelect } from "./DaySelect/DaySelect.tsx";
import { EditDayInput } from "./EditDayInput/EditDayInput.tsx";
import { StyledForm, StyledInputsWrapper } from "./styled.ts";

type EditDayFormProps = {
    dataDays: Array<FormattedStock["date"]>;
    dayData: FormattedStock;
    onEdit: (dayData: FormattedStock) => void;
    onSelectDay: OnSelectCallback;
};

export const EditDayForm: FC<EditDayFormProps> = ({ dataDays, dayData, onEdit, onSelectDay }) => {
    const [formData, setFormData] = useState(dayData);

    useEffect(() => {
        setFormData(dayData);
    }, [dayData]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!isValidNumber(e.target.value)) return;

        const newData = { ...formData, [e.target.name]: Number(e.target.value) };
        setFormData(newData);
        onEdit(newData);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <DaySelect days={dataDays} currentDay={dayData.date} onSelect={onSelectDay} />
            <StyledInputsWrapper>
                <EditDayInput
                    label="Open:"
                    name={EDIT_DAY_INPUTS.OPEN}
                    value={formData.open}
                    onChange={handleInputChange}
                />
                <EditDayInput
                    label="Closed:"
                    name={EDIT_DAY_INPUTS.CLOSE}
                    value={formData.close}
                    onChange={handleInputChange}
                />
                <EditDayInput
                    label="High:"
                    name={EDIT_DAY_INPUTS.HIGH}
                    value={formData.high}
                    onChange={handleInputChange}
                />
                <EditDayInput
                    label="Low:"
                    name={EDIT_DAY_INPUTS.LOW}
                    value={formData.low}
                    onChange={handleInputChange}
                />
            </StyledInputsWrapper>
        </StyledForm>
    );
};
