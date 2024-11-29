import { PATHS } from "@constants/constants";
import { Navigate } from "react-router-dom";

export const NavigateHome = () => {
    return <Navigate to={PATHS.HOME} />;
};
