import { Footer } from "@components/Footer/Footer.tsx";
import { Header } from "@components/Header/Header.tsx";
import { PATHS } from "@constants/constants.ts";

import { StyledCenterer, StyledError, StyledLayout, StyledLink, StyledMain } from "./styled.ts";

export const AppFallback = () => (
    <StyledLayout>
        <Header />
        <StyledMain>
            <StyledCenterer>
                <StyledError>Something went wrong</StyledError>
                <StyledLink to={PATHS.HOME}>Go to Home page</StyledLink>
            </StyledCenterer>
        </StyledMain>
        <Footer />
    </StyledLayout>
);
