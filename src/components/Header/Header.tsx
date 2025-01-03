import { CurrencyLogo } from "@components/CurrencyLogo/CurrencyLogo.tsx";
import ToggleTheme from "@components/Header/ToggleTheme";
import LayoutContainer from "@components/LayoutContainer";
import { DATA_CY } from "@constants/cypress.ts";

import { HeaderMenu } from "./HeaderMenu/HeaderMenu.tsx";
import { StyledCurrencyLogo, StyledHeader, StyledToggle } from "./styled.ts";

export const Header = () => (
    <LayoutContainer>
        <StyledHeader>
            <StyledCurrencyLogo>
                <CurrencyLogo />
            </StyledCurrencyLogo>
            <HeaderMenu />
            <StyledToggle data-cy={DATA_CY.TOGGLE_THEME}>
                <ToggleTheme />
            </StyledToggle>
        </StyledHeader>
    </LayoutContainer>
);
