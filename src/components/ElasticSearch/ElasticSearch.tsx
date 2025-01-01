import { ChangeEvent, FC, useEffect, useState } from "react";
import { useDebounceValue } from "usehooks-ts";

import {
    StyledCrossIcon,
    StyledElasticWrapper,
    StyledInput,
    StyledInputButton,
    StyledInputWrapper,
    StyledOption,
    StyledOptionsList,
    StyledSearchIcon,
} from "./styled.ts";

type CustomSelectProps = {
    options: string[];
    placeholder: string;
    onSelect: (value: string) => void;
    onClear?: VoidFunction;
    renderOption?: (props: RenderOptionProps) => JSX.Element;
};

export const ElasticSearch: FC<CustomSelectProps> = ({ options, placeholder, onSelect, onClear, renderOption }) => {
    const [query, setQuery] = useState("");
    const [debouncedQuery] = useDebounceValue(query, 300);

    const [matchedOptions, setMatchedOptions] = useState<string[]>([]);
    const [isOptionsVisible, setIsOptionsVisible] = useState(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        setIsOptionsVisible(true);
    };

    const handleClear = () => {
        setQuery("");
        setIsOptionsVisible(false);

        if (onClear) onClear();
    };

    const handleOptionClick = (option: string) => {
        setQuery(option);
        setMatchedOptions([]);
        setIsOptionsVisible(false);
        onSelect(option);
    };

    useEffect(() => {
        if (debouncedQuery) {
            const filteredOptions = options.filter((option) =>
                option.toLowerCase().includes(debouncedQuery.toLowerCase())
            );
            setMatchedOptions(filteredOptions);
        } else {
            setMatchedOptions([]);
        }
    }, [debouncedQuery, options]);

    return (
        <StyledElasticWrapper>
            <StyledInputWrapper>
                <StyledInput type="text" placeholder={placeholder} value={query} onChange={handleInputChange} />
                {query ? (
                    <StyledInputButton onClick={handleClear}>
                        <StyledCrossIcon aria-label="Clear" />
                    </StyledInputButton>
                ) : (
                    <StyledInputButton>
                        <StyledSearchIcon aria-label="Search" />
                    </StyledInputButton>
                )}
            </StyledInputWrapper>
            {isOptionsVisible && matchedOptions.length > 0 && (
                <StyledOptionsList>
                    {matchedOptions.map((option) =>
                        renderOption ? (
                            renderOption({ option, onOptionClick: handleOptionClick })
                        ) : (
                            <StyledOption key={option} onClick={() => handleOptionClick(option)}>
                                {option}
                            </StyledOption>
                        )
                    )}
                </StyledOptionsList>
            )}
        </StyledElasticWrapper>
    );
};
