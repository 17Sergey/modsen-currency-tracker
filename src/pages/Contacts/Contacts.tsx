import LayoutContainer from "@components/LayoutContainer";

import { SectionHeading, StyledAddress, StyledInfoItemHeading, StyledInfoList, StyledStrong } from "./styled.ts";

export const Contacts = () => (
    <LayoutContainer>
        <section>
            <SectionHeading>Our contacts:</SectionHeading>
            <StyledInfoList>
                <li>
                    <StyledInfoItemHeading>Address</StyledInfoItemHeading>
                    <div>Republic of Belarus, Minsk, prospekt Nezalezhnasci, 220</div>
                </li>
                <li>
                    <StyledInfoItemHeading>Since 2016</StyledInfoItemHeading>
                    <div>The company was created in 2016 and still is growing it&apos;s potential and income</div>
                </li>
                <li>
                    <StyledInfoItemHeading>Contact us:</StyledInfoItemHeading>
                    <div>
                        <StyledAddress>
                            <StyledStrong>Email:</StyledStrong>{" "}
                            <a href="mailto:modsencurrencytracker@gmail.com">modsencurrencytracker@gmail.com</a>
                        </StyledAddress>
                        <StyledAddress>
                            <StyledStrong>Phone:</StyledStrong>
                            <a href="tel:+375292048885">+375 (29) 209-80-81</a>
                        </StyledAddress>
                    </div>
                </li>
            </StyledInfoList>
        </section>
    </LayoutContainer>
);
