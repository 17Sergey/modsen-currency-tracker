import CurrencyLogo from "@components/CurrencyLogo";
import ToggleTheme from "@components/Header/ToggleTheme";
import LayoutContainer from "@components/LayoutContainer";

import { HeaderMenu } from "./HeaderMenu/HeaderMenu.tsx";
import { StyledHeader, StyledToggle } from "./styled.ts";

export const Header = () => {
    return (
        <>
            <LayoutContainer>
                <StyledHeader>
                    <CurrencyLogo />
                    <HeaderMenu />
                    <StyledToggle>
                        <ToggleTheme />
                    </StyledToggle>
                </StyledHeader>
            </LayoutContainer>
        </>
    );
};
