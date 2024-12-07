import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";

import App from "@components/App";
import ThemeProvider from "@context/ThemeProvider";
import { store } from "@store/index.ts";

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <ThemeProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </Provider>
);
