import { FC, useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

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

export const CustomSelect: FC<CustomSelectProps> = ({ options, currenctValue, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(currenctValue);

    useEffect(() => {
        setSelectedOption(currenctValue);
    }, [currenctValue]);

    const listRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = () => {
        setIsOpen(false);
    };

    useOnClickOutside(listRef, handleClickOutside);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
        onSelect(option);
    };

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <StyledSelectWrapper ref={listRef}>
            <StyleCustomSelect
                role="combobox"
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                tabIndex={0}
                onClick={toggleOpen}
            >
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
                        <StyledDropdownOption
                            key={option}
                            role="option"
                            tabIndex={0}
                            onClick={() => handleOptionClick(option)}
                        >
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
