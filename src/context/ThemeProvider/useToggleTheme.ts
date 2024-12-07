import { useContext } from "react";

import { ThemeContext } from "@context/ThemeProvider/ThemeProvider";

export const useToggleTheme = () => {
    const context = useContext(ThemeContext);

    if (context === undefined) throw new Error("useFavorites must be used within a ToggleThemeContext.Provider");

    return context;
};
