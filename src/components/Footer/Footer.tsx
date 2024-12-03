import { Link } from "react-router";

import CurrencyLogo from "@components/CurrencyLogo";
import LayoutContainer from "@components/LayoutContainer";

import {
    StyledCaption,
    StyledCopywright,
    StyledDescription,
    StyledFlex,
    StyledFooter,
    StyledFooterNav,
    StyledLeft,
    StyledNavBlock,
} from "./styled.ts";

export const Footer = () => {
    return (
        <LayoutContainer>
            <StyledFooter>
                <StyledFlex>
                    <StyledLeft>
                        <StyledCaption>
                            <CurrencyLogo />
                            <p>Modsen Currency Tracker</p>
                        </StyledCaption>
                        <StyledDescription>
                            Since then, the company has grown organically to. Starsup is the world&apos;s largest
                            trading platform, with $12 billion worth of currency trading and 500,000 tickets sold daily
                            to tens of thousands of traders worldwide.
                        </StyledDescription>
                    </StyledLeft>
                    <StyledFooterNav>
                        <StyledNavBlock>
                            <span>General</span>
                            <ul>
                                <li>
                                    <Link to={"/"}>Market</Link>
                                </li>
                                <li>
                                    <Link to={"/"}>Service</Link>
                                </li>
                            </ul>
                        </StyledNavBlock>
                        <StyledNavBlock>
                            <span>Product</span>
                            <ul>
                                <li>
                                    <Link to={"/"}>Sparks</Link>
                                </li>
                                <li>
                                    <Link to={"/"}>Snaps</Link>
                                </li>
                            </ul>
                        </StyledNavBlock>
                        <StyledNavBlock>
                            <span>Community</span>
                            <ul>
                                <li>
                                    <Link to={"/"}>Ideas</Link>
                                </li>
                                <li>
                                    <Link to={"/"}>Streams</Link>
                                </li>
                            </ul>
                        </StyledNavBlock>
                    </StyledFooterNav>
                </StyledFlex>
                <StyledCopywright>
                    <p>Startsup © 2023-2024, All Rights Reserved</p>
                </StyledCopywright>
            </StyledFooter>
        </LayoutContainer>
    );
};
