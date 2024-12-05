import { useContext } from "react";

import { ToggleThemeContext } from "@context/StyledComponentsProvider/StyledComponentsProvider";

export const useToggleTheme = () => {
    const context = useContext(ToggleThemeContext);

    if (context === undefined) throw new Error("useFavorites must be used within a ToggleThemeContext.Provider");

    return context;
};
