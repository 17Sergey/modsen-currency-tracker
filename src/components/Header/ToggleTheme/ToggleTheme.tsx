import { useTheme } from "styled-components";

import Toggler from "@assets/images/toggler.png";
import { THEMES } from "@constants/constants.ts";
import { useToggleTheme } from "@hooks/useToggleTheme.ts";

import { StyledImg } from "./styled.ts";

export const ToggleTheme = () => {
    const { name: themeName } = useTheme();
    const toggleTheme = useToggleTheme();

    const isDarkMode = themeName === THEMES.DARK;

    return (
        <button
            aria-pressed={isDarkMode}
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
            onClick={toggleTheme}
        >
            <StyledImg src={Toggler} alt="toggle-theme" />
        </button>
    );
};
