import { Suspense } from "react";
import { Route, Routes } from "react-router";

import { Footer } from "@components/Footer/Footer.tsx";
import { Header } from "@components/Header/Header.tsx";
import { Loader } from "@components/Loader/Loader.tsx";
import { PATHS } from "@constants/constants.ts";
import { ROUTES } from "@constants/routes.ts";

import { StyledLayout, StyledMain } from "./styled.ts";

export const App = () => (
    <StyledLayout>
        <Header />
        <StyledMain>
            <Suspense fallback={<Loader variant="sm" />}>
                <Routes>
                    {ROUTES.map((route) => (
                        <Route
                            key={route.path}
                            index={route.path === PATHS.HOME}
                            path={route.path}
                            element={<route.component />}
                        />
                    ))}
                </Routes>
            </Suspense>
        </StyledMain>
        <Footer />
    </StyledLayout>
);
