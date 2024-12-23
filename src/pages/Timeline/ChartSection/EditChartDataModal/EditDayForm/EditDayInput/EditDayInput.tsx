import { ChangeEvent, PureComponent } from "react";

import { StyledInput, StyledLabel } from "./styled.ts";

type EditDayInputProps = {
    label: string;
    name: string;
    value: number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export class EditDayInput extends PureComponent<EditDayInputProps> {
    render() {
        const { label, name, value, onChange } = this.props;

        return (
            <StyledLabel htmlFor={name}>
                <span>{label}</span>
                <StyledInput type="text" name={name} id={name} value={value} onChange={onChange} />
            </StyledLabel>
        );
    }
}
