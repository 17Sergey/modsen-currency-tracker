import { ChangeEvent, FC } from "react";

import { StyledInput, StyledLabel } from "./styled.ts";

type EditDayInputProps = {
    label: string;
    name: string;
    value: number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const EditDayInput: FC<EditDayInputProps> = ({ label, name, value, onChange }) => (
    <StyledLabel htmlFor={name}>
        <span>{label}</span>
        <StyledInput type="text" name={name} id={name} value={value} onChange={onChange} />
    </StyledLabel>
);
