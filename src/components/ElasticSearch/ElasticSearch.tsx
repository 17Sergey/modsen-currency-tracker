import { ChangeEvent, CSSProperties, FC, useEffect, useRef, useState } from "react";
import { useDebounceValue } from "usehooks-ts";

import Portal from "@components/Portal/index.tsx";
import { Z_INDEX_MANAGER } from "@constants/constants.ts";

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
    renderOption?: (props: RenderOptionProps) => JSX.Element;
};

export const ElasticSearch: FC<CustomSelectProps> = ({ options, placeholder, onSelect, renderOption }) => {
    const [query, setQuery] = useState("");
    const [debouncedQuery] = useDebounceValue(query, 300);

    const [matchedOptions, setMatchedOptions] = useState<string[]>([]);
    const [isOptionsVisible, setIsOptionsVisible] = useState(false);

    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        setIsOptionsVisible(true);
    };

    const handleClear = () => {
        setQuery("");
        setIsOptionsVisible(false);
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

    const handleOptionClick = (option: string) => {
        setQuery(option);
        setMatchedOptions([]);
        setIsOptionsVisible(false);
        onSelect(option);
    };

    const getDropdownStyle = (): CSSProperties => {
        if (inputRef.current) {
            const rect = inputRef.current.getBoundingClientRect();
            return {
                position: "absolute",
                top: `${rect.bottom + window.scrollY + 4}px`,
                left: `${rect.left + window.scrollX}px`,
                width: `${rect.width}px`,
                zIndex: Z_INDEX_MANAGER.DROWDOWN,
            };
        }
        return {};
    };

    return (
        <StyledElasticWrapper>
            <StyledInputWrapper>
                <StyledInput
                    ref={inputRef}
                    type="text"
                    placeholder={placeholder}
                    value={query}
                    onChange={handleInputChange}
                />
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
                <Portal rootId="dropdown-root">
                    <StyledOptionsList style={getDropdownStyle()}>
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
                </Portal>
            )}
        </StyledElasticWrapper>
    );
};
