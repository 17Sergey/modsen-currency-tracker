import { Link } from "react-router";

import CurrencyLogoUrl from "@assets/icons/CurrencyLogo.svg?url";
import { PATHS } from "@constants/constants";

export const CurrencyLogo = () => (
    <div>
        <Link to={PATHS.HOME} title="Go to Home page"></Link>
        <img src={CurrencyLogoUrl} alt="Currency logo" />
    </div>
);
