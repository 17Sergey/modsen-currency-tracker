import { CSSProperties, FC, MouseEvent, useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

import { IconMatcher } from "@components/IconMatcher/IconMatcher.tsx";
import Portal from "@components/Portal";
import { Z_INDEX_MANAGER } from "@constants/constants.ts";

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
    const selectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setSelectedOption(currenctValue);
    }, [currenctValue]);

    const handleClickOutside = (event: MouseEvent | TouchEvent | FocusEvent) => {
        const target = event.target as HTMLElement;
        if (target.id === "dropdown_option" || target.id === "dropdown_list") return;

        setIsOpen(false);
    };

    useOnClickOutside(selectRef, handleClickOutside);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
        onSelect(option);
    };

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const getDropdownStyle = (): CSSProperties => {
        if (selectRef.current) {
            const rect = selectRef.current.getBoundingClientRect();
            return {
                position: "absolute",
                top: `${rect.bottom + window.scrollY}px`,
                left: `${rect.left + window.scrollX}px`,
                width: `${rect.width}px`,
                zIndex: Z_INDEX_MANAGER.DROWDOWN,
            };
        }
        return {};
    };

    return (
        <StyledSelectWrapper ref={selectRef}>
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
                <Portal rootId="dropdown-root">
                    <StyledDropdownList
                        role="listbox"
                        aria-label="Select an option"
                        style={getDropdownStyle()}
                        id={"dropdown_list"}
                    >
                        {options.map((option) => (
                            <StyledDropdownOption
                                key={option}
                                role="option"
                                tabIndex={0}
                                onClick={() => handleOptionClick(option)}
                                id={"dropdown_option"}
                            >
                                <StyledIcon>
                                    <IconMatcher code={option} />
                                </StyledIcon>
                                <span>{option}</span>
                            </StyledDropdownOption>
                        ))}
                    </StyledDropdownList>
                </Portal>
            )}
        </StyledSelectWrapper>
    );
};
