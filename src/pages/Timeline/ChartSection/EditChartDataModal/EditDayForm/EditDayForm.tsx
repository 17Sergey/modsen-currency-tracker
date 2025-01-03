import { ChangeEvent, Component, FormEvent } from "react";

import { DATA_CY } from "@constants/cypress.ts";
import { EDIT_DAY_INPUTS } from "@constants/timelinePage.ts";
import { isValidNumericInput } from "@utils/isValidNumericInput.ts";

import { DaySelect } from "./DaySelect/DaySelect.tsx";
import { EditDayInput } from "./EditDayInput/EditDayInput.tsx";
import { StyledForm, StyledInputsWrapper } from "./styled.ts";

type EditDayFormProps = {
    dataDays: Array<FormattedStock["date"]>;
    dayData: FormattedStock;
    onEdit: (dayData: FormattedStock) => void;
    onSelectDay: OnSelectCallback;
};

type EditDayFormState = {
    formData: FormattedStock;
};

export class EditDayForm extends Component<EditDayFormProps, EditDayFormState> {
    constructor(props: EditDayFormProps) {
        super(props);
        this.state = {
            formData: props.dayData,
        };
    }

    componentDidMount() {
        this.setFormData(this.props.dayData);
    }

    componentDidUpdate(prevProps: EditDayFormProps) {
        if (prevProps.dayData !== this.props.dayData) {
            this.setFormData(this.props.dayData);
        }
    }

    setFormData = (dayData: FormattedStock) => {
        this.setState({ formData: dayData });
    };

    handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!isValidNumericInput(e.target.value)) return;

        const newData = { ...this.state.formData, [e.target.name]: Number(e.target.value) };
        this.setState({ formData: newData });
        this.props.onEdit(newData);
    };

    static handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    render() {
        const { dataDays, dayData } = this.props;
        const { formData } = this.state;

        return (
            <StyledForm onSubmit={EditDayForm.handleSubmit}>
                <DaySelect days={dataDays} currentDay={dayData.date} onSelect={this.props.onSelectDay} />
                <StyledInputsWrapper>
                    <EditDayInput
                        label="Open:"
                        name={EDIT_DAY_INPUTS.OPEN}
                        value={formData.open}
                        onChange={this.handleInputChange}
                        dataCy={DATA_CY.OPEN_INPUT}
                    />
                    <EditDayInput
                        label="Closed:"
                        name={EDIT_DAY_INPUTS.CLOSE}
                        value={formData.close}
                        onChange={this.handleInputChange}
                    />
                    <EditDayInput
                        label="High:"
                        name={EDIT_DAY_INPUTS.HIGH}
                        value={formData.high}
                        onChange={this.handleInputChange}
                    />
                    <EditDayInput
                        label="Low:"
                        name={EDIT_DAY_INPUTS.LOW}
                        value={formData.low}
                        onChange={this.handleInputChange}
                    />
                </StyledInputsWrapper>
            </StyledForm>
        );
    }
}
