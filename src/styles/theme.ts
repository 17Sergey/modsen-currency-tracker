import { THEMES } from "@constants/constants";

export const darkTheme = {
    name: THEMES.DARK,
    widths: {
        container: "1224px",
        currencyIcon: "5rem",
    },
    colors: {
        background: "#030304",
        backgroundNeutral: "#202025",

        textPrimary: "#FFFFFF",
        textNeutral: "#D9D9D9",
        textNeutralTransparent: "#A7B2C3",
        textFooter: "#898989",

        primary: "#00BC4F",
        primaryTransparent: "#02471F",

        border: "#474747",
        gray: "#9E9E9E",
        inputBg: "#1B2028",

        chartHighlight: "#FF971D",
        chartUp: "#16C782",
        chartDown: "#EA3943",
        mapSelectedTag: "#185CFF",

        logoGradient: {
            first: "#2ADD50",
            second: "#AFDD2A",
        },

        captionGradient: {
            first: "#00CE2C",
            second: "#AEDF23",
            third: "#A3DC00",
        },

        welcomeGradient: {
            first: "#121212",
            second: "#24794000",
        },
    },
    fonts: {
        primary: "Poppins",
        secondary: "Inter",
        size: {
            small: "0.75rem", // 12px
            base: "1rem", // 16px
            medium: "1.25rem", // 20px
            subheading: "1.5rem", // 24px
            heading: "2rem", // 32px
            headingL: "2.1875rem", // 35px
            headingXL: "2.375rem", // 38px

            footerCaption: "1.625rem", // 26px
            footerMenu: "1.75rem", // 28px
            captionLarge: "4.75rem", // 76px
            captionLargeWord: "5.625rem", // 90px
        },
        weight: {
            light: 300,
            regular: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
        },
    },
    paddings: {
        container: "1rem",
        pageTop: "2rem",
        searchInput: "1.25rem",
        currencyIcon: "2rem",
        currencyCard: "2rem",
    },
    margins: {
        sectionTop: "3.5rem",
    },
};

export const lightTheme = {
    ...darkTheme,
    name: THEMES.LIGHT,
    colors: {
        background: "#FFFFFF",
        backgroundNeutral: "#FAFAFA",

        textPrimary: "#030304",
        textNeutral: "#D9D9D9",
        textNeutralTransparent: "#A7B2C3",
        textFooter: "#898989",

        primary: "#00BC4F",
        primaryTransparent: "#02471F",

        border: "#474747",
        gray: "#9E9E9E",
        inputBg: "#1B2028",

        chartHighlight: "#FF971D",
        chartUp: "#16C782",
        chartDown: "#EA3943",
        mapSelectedTag: "#185CFF",

        logoGradient: {
            first: "#2ADD50",
            second: "#AFDD2A",
        },

        captionGradient: {
            first: "#00CE2C",
            second: "#AEDF23",
            third: "#A3DC00",
        },

        welcomeGradient: {
            first: "#121212",
            second: "#24794000",
        },
    },
};
