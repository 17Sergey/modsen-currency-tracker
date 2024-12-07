import { createContext, FC, PropsWithChildren, useState } from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

import { THEMES } from "@constants/constants";
import { GlobalStyles } from "@styles/globalStyles";
import { darkTheme, lightTheme } from "@styles/theme";

export const ThemeContext = createContext<VoidFunction | undefined>(undefined);

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    // TODO: add default theme depending on user agent preferences
    const [theme, setTheme] = useState<DefaultTheme>(darkTheme);

    const toggleTheme = () => {
        setTheme(theme.name === THEMES.DARK ? lightTheme : darkTheme);
    };

    return (
        <ThemeContext.Provider value={toggleTheme}>
            <StyledComponentsThemeProvider theme={theme}>
                <GlobalStyles />
                {children}
            </StyledComponentsThemeProvider>
        </ThemeContext.Provider>
    );
};
