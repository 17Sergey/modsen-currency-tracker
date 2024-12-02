import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "@styles/globalStyles";
import { darkTheme } from "@styles/theme";

export const StyledComponentsProvider: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
};
