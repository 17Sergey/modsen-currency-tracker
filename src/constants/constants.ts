export const PATHS = {
    HOME: "/",
    TIMELINE: "/timeline",
    BANK: "/bank",
    CONTACTS: "/contacts",
    CATCH_ALL: "*",
};

export const MENU_ITEMS: MenuItem[] = [
    { caption: "Home", location: PATHS.HOME },
    { caption: "Timeline", location: PATHS.TIMELINE },
    { caption: "Bank card", location: PATHS.BANK },
    { caption: "Contacto", location: PATHS.CONTACTS },
];

export const THEMES = {
    DARK: "dark",
    LIGHT: "light",
};

export const REDUX_SLICES = {
    HOME_PAGE: "homePage",
};
