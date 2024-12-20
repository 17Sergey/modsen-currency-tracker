import LayoutContainer from "@components/LayoutContainer";

import {
    SectionHeading,
    StyledAddress,
    StyledContactsSection,
    StyledInfoItem,
    StyledInfoItemHeading,
    StyledInfoItemText,
    StyledInfoList,
    StyledStrong,
} from "./styled.ts";

export const Contacts = () => (
    <LayoutContainer>
        <StyledContactsSection>
            <SectionHeading>Our contacts:</SectionHeading>
            <StyledInfoList>
                <StyledInfoItem>
                    <StyledInfoItemHeading>Address</StyledInfoItemHeading>
                    <StyledInfoItemText>Republic of Belarus, Minsk, prospekt Nezalezhnasci, 220</StyledInfoItemText>
                </StyledInfoItem>
                <StyledInfoItem>
                    <StyledInfoItemHeading>Since 2016</StyledInfoItemHeading>
                    <StyledInfoItemText>
                        The company was created in 2016 and still is growing it&apos;s potential and income
                    </StyledInfoItemText>
                </StyledInfoItem>
                <StyledInfoItem>
                    <StyledInfoItemHeading>Contact us:</StyledInfoItemHeading>
                    <StyledInfoItemText>
                        <StyledAddress>
                            <div>
                                <StyledStrong>Email:</StyledStrong>{" "}
                                <a href="mailto:modsencurrencytracker@gmail.com">modsencurrencytracker@gmail.com</a>
                            </div>
                            <div>
                                <StyledStrong>Phone:</StyledStrong>
                                <a href="tel:+375292048885">+375 (29) 209-80-81</a>
                            </div>
                        </StyledAddress>
                    </StyledInfoItemText>
                </StyledInfoItem>
            </StyledInfoList>
        </StyledContactsSection>
    </LayoutContainer>
);
