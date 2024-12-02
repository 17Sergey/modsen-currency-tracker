import { Link } from "react-router-dom";

import CurrencyLogo from "@components/Icons/CurrencyLogo";
import LayoutContainer from "@components/LayoutContainer";
import { PATHS } from "@constants/constants";

import { StyledHeader } from "./styled.ts";

export const Header = () => {
    return (
        <>
            <LayoutContainer>
                <StyledHeader>
                    <Link to={PATHS.HOME}>
                        <CurrencyLogo />
                    </Link>
                    {/* <HeaderMenu /> */}
                    {/* <ToggleTheme /> */}
                </StyledHeader>
            </LayoutContainer>
        </>
    );
};
