import { Navigate } from "react-router-dom";

import { PATHS } from "@constants/constants";

export const NavigateHome = () => {
    return <Navigate to={PATHS.HOME} />;
};
