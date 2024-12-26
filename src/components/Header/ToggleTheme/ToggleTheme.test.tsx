import { ReactNode } from "react";
import { useTheme } from "styled-components";

import { THEMES } from "@constants/constants.ts";
import ThemeProvider from "@context/ThemeProvider";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ToggleTheme } from "./ToggleTheme.tsx";

const renderWithThemeProvider = (children: ReactNode) => {
    return render(<ThemeProvider>{children}</ThemeProvider>);
};

describe("Toggle theme", () => {
    test("ToggleTheme changes theme on click", async () => {
        const { getByRole } = renderWithThemeProvider(<ToggleTheme />);

        const toggleButton = getByRole("switch");

        // Dark theme is the default and checked
        expect(toggleButton).toHaveAttribute("aria-checked", "true");

        userEvent.click(toggleButton);

        // Light theme
        await waitFor(() => {
            expect(toggleButton).toHaveAttribute("aria-checked", "false");
        });
    });

    test("Theme name changes on toggle", async () => {
        const TestComponent = () => {
            const { name: themeName } = useTheme();
            return <div data-testid="theme-name">{themeName}</div>;
        };

        const { getByRole, getByTestId } = renderWithThemeProvider(
            <>
                <ToggleTheme />
                <TestComponent />
            </>
        );
        const toggleButton = getByRole("switch");
        const themeNameElement = getByTestId("theme-name");

        expect(themeNameElement).toHaveTextContent(THEMES.DARK);

        userEvent.click(toggleButton);

        await waitFor(() => {
            expect(themeNameElement).toHaveTextContent(THEMES.LIGHT);
        });
    });
});
