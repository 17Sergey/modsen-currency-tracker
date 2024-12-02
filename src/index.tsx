import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import App from "@components/App";
import StyledComponentsProvider from "@context/StyledComponentsProvider";

createRoot(document.getElementById("root")!).render(
    <StyledComponentsProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StyledComponentsProvider>
);
