import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
    colors: {
        primary: "#F17900",
        primaryTransparent: "#fbd7b24d",

        secondary: "#E0A449",

        background: "#FAFAFA",
        white: "#FFFFFF",

        text: "#393939",
        textTransparent: "#39393980",

        lightGray: "#F9F9F9",
        inputBackground: "#3939390D",

        error: "#FF5861",
    },
    fonts: {
        primary: "Lexend Deca",
        secondary: "Inter",
        fontSize: {
            small: "0.95rem",
            base: "1rem",
            medium: "1.125rem",
            subheading: "1.5rem",
            heading: "2rem",
            headingLarge: "3.5rem",
        },
    },
    paddings: {
        container: "1rem",
        pageTop: "2rem",
    },
    margins: {
        pageTop: "2rem",
    },
};

export const darkTheme: DefaultTheme = {
    ...defaultTheme,
    colors: {
        primary: "#F17900",
        primaryTransparent: "#fbd7b24d",

        secondary: "#E0A449",

        background: "#FAFAFA",
        white: "#FFFFFF",

        text: "#393939",
        textTransparent: "#39393980",

        lightGray: "#F9F9F9",
        inputBackground: "#3939390D",

        error: "#FF5861",
    },
    fonts: {
        primary: "Lexend Deca",
        secondary: "Inter",
        fontSize: {
            small: "0.95rem",
            base: "1rem",
            medium: "1.125rem",
            subheading: "1.5rem",
            heading: "2rem",
            headingLarge: "3.5rem",
        },
    },
    paddings: {
        container: "1rem",
        pageTop: "2rem",
    },
    margins: {
        pageTop: "2rem",
    },
};
