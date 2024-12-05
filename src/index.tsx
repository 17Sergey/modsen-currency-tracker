import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";

import App from "@components/App";
import StyledComponentsProvider from "@context/StyledComponentsProvider";
import { store } from "@store/index.ts";

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <StyledComponentsProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StyledComponentsProvider>
    </Provider>
);
