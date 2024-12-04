import CurrencyLogo from "@assets/icons/currencyLogo.svg";
import LayoutContainer from "@components/LayoutContainer";

import {
    StyledBigWord,
    StyledCurrencyLogo,
    StyledDescription,
    StyledFlex,
    StyledHeading,
    StyledLeft,
    StyledWelcomeSection,
} from "./styled.ts";

export const WelcomeScreen = () => {
    return (
        <>
            <StyledWelcomeSection>
                <LayoutContainer>
                    <StyledFlex>
                        <StyledLeft>
                            <StyledHeading>
                                Modsen Currency
                                <br />
                                <StyledBigWord>Tracker</StyledBigWord>
                            </StyledHeading>
                            <StyledDescription>
                                Quotes for the dollar and other international currencies.
                            </StyledDescription>
                        </StyledLeft>
                        <StyledCurrencyLogo>
                            <CurrencyLogo role="img" aria-label="Currency Logo" />
                        </StyledCurrencyLogo>
                    </StyledFlex>
                </LayoutContainer>
            </StyledWelcomeSection>
        </>
    );
};
