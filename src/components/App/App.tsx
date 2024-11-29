import { Footer } from "@components/Footer/Footer.tsx";
import { Header } from "@components/Header/Header.tsx";
import { Loader } from "@components/Loader/Loader.tsx";
import { ROUTES } from "@constants/routes.ts";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { StyledLayout, StyledMain } from "./styled.ts";

export const App = () => {
    return (
        <StyledLayout>
            <Header />
            <StyledMain>
                <Suspense fallback={<Loader />}>
                    <Routes>
                        {ROUTES.map((route) => {
                            return <Route key={route.path} path={route.path} element={<route.component />} />;
                        })}
                    </Routes>
                </Suspense>
            </StyledMain>
            <Footer />
        </StyledLayout>
    );
};
