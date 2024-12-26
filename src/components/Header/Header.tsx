import { CurrencyLogo } from "@components/CurrencyLogo/CurrencyLogo.tsx";
import ToggleTheme from "@components/Header/ToggleTheme";
import LayoutContainer from "@components/LayoutContainer";

import { HeaderMenu } from "./HeaderMenu/HeaderMenu.tsx";
import { StyledCurrencyLogo, StyledHeader, StyledToggle } from "./styled.ts";

export const Header = () => (
    <LayoutContainer>
        <StyledHeader>
            <StyledCurrencyLogo>
                <CurrencyLogo />
            </StyledCurrencyLogo>
            <HeaderMenu />
            <StyledToggle data-cy={"toggleThemeDesktop"}>
                <ToggleTheme />
            </StyledToggle>
        </StyledHeader>
    </LayoutContainer>
);
