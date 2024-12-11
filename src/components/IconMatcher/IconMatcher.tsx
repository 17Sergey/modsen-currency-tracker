import { FC } from "react";

import AustralianDollarIcon from "@assets/icons/currencies/AustralianDollarIcon.svg?url";
import BitcoinIcon from "@assets/icons/currencies/BitcoinIcon.svg?url";
import BovespaIcon from "@assets/icons/currencies/BovespaIcon.svg?url";
import CanadianDollarIcon from "@assets/icons/currencies/CanadianDollarIcon.svg?url";
import DollarIcon from "@assets/icons/currencies/DollarIcon.svg?url";
import EuroIcon from "@assets/icons/currencies/EuroIcon.svg?url";
import IfixIcon from "@assets/icons/currencies/IfixIcon.svg?url";
import LibraIcon from "@assets/icons/currencies/LibraIcon.svg?url";
import PesoArgentinoIcon from "@assets/icons/currencies/PesoArgentinoIcon.svg?url";
import WonIcon from "@assets/icons/currencies/WonIcon.svg?url";
import YenIcon from "@assets/icons/currencies/YenIcon.svg?url";
import CurrencyLogo from "@assets/icons/CurrencyLogo.svg?url";
import { CURRENCY_CODES, STOCKS_CODES } from "@constants/constants";

type IconMatcherProps = {
    code: string;
};

export const IconMatcher: FC<IconMatcherProps> = ({ code }) => {
    let iconSource = "";

    switch (code) {
        case CURRENCY_CODES.USD:
            iconSource = DollarIcon;
            break;
        case CURRENCY_CODES.AUD:
            iconSource = AustralianDollarIcon;
            break;
        case CURRENCY_CODES.CAD:
            iconSource = CanadianDollarIcon;
            break;
        case CURRENCY_CODES.CZK:
            iconSource = PesoArgentinoIcon;
            break;
        case CURRENCY_CODES.EUR:
            iconSource = EuroIcon;
            break;
        case CURRENCY_CODES.GBP:
            iconSource = BovespaIcon;
            break;
        case CURRENCY_CODES.JPY:
            iconSource = YenIcon;
            break;
        case CURRENCY_CODES.PLN:
            iconSource = LibraIcon;
            break;
        case CURRENCY_CODES.RUB:
            iconSource = WonIcon;
            break;
        case STOCKS_CODES.BTC:
            iconSource = BitcoinIcon;
            break;
        case STOCKS_CODES.LTC:
            iconSource = IfixIcon;
            break;
        default:
            iconSource = CurrencyLogo;
            break;
    }
    return <img src={iconSource} alt={`${code} Logo`} />;
};
