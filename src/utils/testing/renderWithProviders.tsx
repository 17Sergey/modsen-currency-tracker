import { ReactNode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";

import ThemeProvider from "@context/ThemeProvider";
import { store } from "@store/index.ts";
import { render } from "@testing-library/react";

const renderWithProviders = (children: ReactNode) => {
    return render(
        <Provider store={store}>
            <ThemeProvider>
                <BrowserRouter>{children}</BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
};

export { renderWithProviders };
