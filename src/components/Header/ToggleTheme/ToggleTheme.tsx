import { useTheme } from "styled-components";

import { THEMES } from "@constants/constants.ts";
import { useToggleTheme } from "@context/ThemeProvider/useToggleTheme.ts";

import { StyledButton, StyledCircle, StyledEllipse } from "./styled.ts";

export const ToggleTheme = () => {
    const { name: themeName } = useTheme();
    const toggleTheme = useToggleTheme();

    const isDarkMode = themeName === THEMES.DARK;

    return (
        <StyledButton
            role="switch"
            aria-checked={isDarkMode}
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
            onClick={toggleTheme}
        >
            <StyledEllipse $isDarkMode={isDarkMode}>
                <StyledCircle $isDarkMode={isDarkMode}></StyledCircle>
            </StyledEllipse>
        </StyledButton>
    );
};
