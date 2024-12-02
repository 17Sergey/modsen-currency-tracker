import { Link } from "react-router";

import CurrencyIcon from "@assets/icons/currencyLogo.svg";
import { PATHS } from "@constants/constants";

export const CurrencyLogo = () => {
    return (
        <>
            <Link to={PATHS.HOME}>
                <img src={CurrencyIcon} alt="Currency logo" />
            </Link>
        </>
    );
};
