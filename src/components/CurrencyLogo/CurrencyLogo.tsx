import { Link } from "react-router";

import CurrencyLogoUrl from "@assets/icons/currencyLogo.svg?url";
import { PATHS } from "@constants/constants";

export const CurrencyLogo = () => {
    return (
        <>
            <Link to={PATHS.HOME}>
                <img src={CurrencyLogoUrl} alt="Currency logo" />
            </Link>
        </>
    );
};
