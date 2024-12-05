import { Link } from "react-router";

import CurrencyLogoUrl from "@assets/icons/currencyLogo.svg?url";
import { PATHS } from "@constants/constants";

export const CurrencyLogo = () => (
    <div>
        <Link to={PATHS.HOME} title="Go to Home page">
            <img src={CurrencyLogoUrl} alt="Currency logo" />
        </Link>
    </div>
);
