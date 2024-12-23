import { THEMES } from "@constants/constants";

export const darkTheme = {
    name: THEMES.DARK,
    widths: {
        container: "1224px",
        currencyIcon: "5rem",
        icons: {
            xs: "1rem",
            xxs: "1.5rem",
            sm: "2rem",
            base: "2.5rem",
            md: "3rem",
            xl: "4rem",
        },
        loader: {
            sm: "2rem",
            md: "5rem",
            lg: "7rem",
        },
        customScroll: "0.25rem",
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

        modalOverlay: "#00000060",
        modalBox: "#4A4E69",

        chartHighlight: "#FF971D",
        chartUp: "#16C782",
        chartDown: "#EA3943",
        chartGrid: "#FFFFFF30",
        mapSelectedTag: "#3FB1CE",

        error: "#EA3943",

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
            second: "#24794020",
        },

        updatedAtPulses: {
            inner: "#019841",
            middle: "#02461F",
            outer: "#022B14",
        },
    },
    fonts: {
        primary: "Poppins",
        secondary: "Inter",
        size: {
            sm: "0.75rem",
            base: "1rem",
            md: "1.25rem",
            lg: "1.5rem",
            xl: "2rem",
            xxl: "3rem",
            large: "4.25rem",
            largest: "5rem",
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
        xs: "0.25rem",
        sm: "0.5rem",
        m: "0.75rem",
        base: "1rem",
        md: "1.25rem",
        xl: "1.5rem",
        xxl: "2rem",
        lg: "3rem",
        large: "4rem",
    },
    margins: {
        xs: "0.25rem",
        sm: "0.5rem",
        base: "1rem",
        m: "1.5rem",
        md: "2rem",
        xl: "4rem",
        xxl: "6rem",
        lg: "9rem",
        toast: "0.5rem",
    },
};

export const lightTheme = {
    ...darkTheme,
    name: THEMES.LIGHT,
    colors: {
        ...darkTheme.colors,
        background: "#FFFFFF",
        backgroundNeutral: "#FAFAFA",

        textPrimary: "#030304",
        textNeutral: "#D9D9D9",
        textNeutralTransparent: "#A7B2C3",
        textFooter: "#898989",

        primary: "#00BC4F",
        primaryTransparent: "#02471F",

        border: "#EBEBEB",
        gray: "#9E9E9E",
        inputBg: "#FAFAFA",

        chartGrid: "#00000030",

        updatedAtPulses: {
            inner: "#00BC4F",
            middle: "#7ADCA4",
            outer: "#CCF2DC",
        },
    },
};
