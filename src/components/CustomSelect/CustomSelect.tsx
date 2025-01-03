import { FC, useEffect, useState } from "react";

import { IconMatcher } from "@components/IconMatcher/IconMatcher.tsx";

import {
    StyleCustomSelect,
    StyledChevronIcon,
    StyledDropdownList,
    StyledDropdownOption,
    StyledIcon,
    StyledSelectedOption,
    StyledSelectVisualPart,
    StyledSelectWrapper,
} from "./styled.ts";

type CustomSelectProps = {
    options: string[];
    currenctValue: string;
    onSelect: (value: string) => void;
};

export const CustomSelect: FC<CustomSelectProps> = ({ options, currenctValue, onSelect, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(currenctValue);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
        onSelect(option);
    };

    const toggleOpen = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        setSelectedOption(currenctValue);
    }, [currenctValue]);

    return (
        <StyledSelectWrapper {...props}>
            <StyleCustomSelect role="combobox" aria-expanded={isOpen} aria-haspopup="listbox" onClick={toggleOpen}>
                <StyledSelectVisualPart>
                    <StyledSelectedOption>
                        <StyledIcon>
                            <IconMatcher code={selectedOption} />
                        </StyledIcon>
                        <span>{selectedOption}</span>
                    </StyledSelectedOption>
                    <StyledChevronIcon />
                </StyledSelectVisualPart>
            </StyleCustomSelect>
            {isOpen && (
                <StyledDropdownList role="listbox" aria-label="Select an option">
                    {options.map((option) => (
                        <StyledDropdownOption key={option} role="option" onClick={() => handleOptionClick(option)}>
                            <StyledIcon>
                                <IconMatcher code={option} />
                            </StyledIcon>
                            <span>{option}</span>
                        </StyledDropdownOption>
                    ))}
                </StyledDropdownList>
            )}
        </StyledSelectWrapper>
    );
};
