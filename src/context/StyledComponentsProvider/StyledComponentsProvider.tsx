import { GlobalStyles } from "@styles/globalStyles";
import { darkTheme } from "@styles/theme";
import { ThemeProvider } from "styled-components";

export function StyledComponentsProvider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
}
