import { GlobalStyles } from "@styles/globalStyles.ts";
import { darkTheme } from "@styles/theme.ts";
import { ThemeProvider } from "styled-components";

import { StyledP } from "./styled.ts";

export function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyles />
            <StyledP>Hello world</StyledP>
        </ThemeProvider>
    );
}
