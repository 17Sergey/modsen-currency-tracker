import { createContext, PropsWithChildren, useState } from "react";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

import { THEMES } from "@constants/constants";
import { GlobalStyles } from "@styles/globalStyles";
import { darkTheme, lightTheme } from "@styles/theme";

type ToggleThemeType = () => void;

export const ToggleThemeContext = createContext<ToggleThemeType | undefined>(undefined);

export const StyledComponentsProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [theme, setTheme] = useState<DefaultTheme>(darkTheme);

    const toggleTheme = () => {
        setTheme(theme.name === THEMES.DARK ? lightTheme : darkTheme);
    };

    return (
        <ToggleThemeContext.Provider value={toggleTheme}>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                {children}
            </ThemeProvider>
        </ToggleThemeContext.Provider>
    );
};
