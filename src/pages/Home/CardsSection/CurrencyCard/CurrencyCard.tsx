import { FC } from "react";

import IconMatcher from "@components/IconMatcher/index.tsx";
import { useDisableBodyScroll } from "@hooks/useDisableBodyScroll.ts";
import { useModal } from "@hooks/useModal.ts";
import ConverterModal from "@pages/Home/CardsSection/CurrencyCard/ConverterModal";
import { getCurrencyCaption } from "@utils/getCurrencyCaption.ts";

import { StyledCard, StyledIcon, StyledInfo, StyledMockButton, StyledName, StyledValue } from "./styled.ts";

type CurrencyCardProps = CurrencyData;

export const CurrencyCard: FC<CurrencyCardProps> = ({ currency, value }) => {
    const { isModalOpen, openModal, closeModal } = useModal();
    useDisableBodyScroll(isModalOpen);

    return (
        <StyledCard>
            <StyledIcon>
                <IconMatcher code={currency} />
            </StyledIcon>
            <StyledInfo>
                <StyledName>{getCurrencyCaption(currency)}</StyledName>
                <StyledValue>
                    1 USD = {value} {currency}
                </StyledValue>
            </StyledInfo>
            <StyledMockButton aria-label="Open converter modal" onClick={openModal}></StyledMockButton>
            {isModalOpen && <ConverterModal baseCurrency={{ currency, value }} onClose={closeModal} />}
        </StyledCard>
    );
};
