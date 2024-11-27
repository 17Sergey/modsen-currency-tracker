import "styled-components";

// TODO: Set up automatic types

interface ThemeColors {
    background: HEX;
    backgroundNeutral: HEX;

    textPrimary: HEX;
    textNeutral: HEX;
    textNeutralTransparent: HEX;
    textFooter: HEX;

    primary: HEX;
    primaryTransparent: HEX;

    border: HEX;
    gray: HEX;
    inputBg: HEX;

    chartHighlight: HEX;
    chartUp: HEX;
    chartDown: HEX;
    mapSelectedTag: HEX;

    logoGradient: {
        first: HEX;
        second: HEX;
    };

    captionGradient: {
        first: HEX;
        second: HEX;
        third: HEX;
    };

    welcomeGradient: {
        first: HEX;
        second: HEX;
    };

    [key: string]: HEX;
}

interface ThemeFonts {
    primary: string;
    secondary: string;
    size: {
        small: string;
        base: string;
        medium: string;
        subheading: string;
        heading: string;
        headingL: string;
        headingXL: string;

        footerCaption: string;
        footerMenu: string;
        captionLarge: string;
        captionLargeWord: string;
    };
    weight: {
        light: number;
        regular: number;
        medium: number;
        semibold: number;
        bold: number;
    };
}

interface ThemePaddings {
    container: string;
    pageTop: string;
    searchInput: string;
    currencyIcon: string;
    currencyCard: string;
}

interface ThemeMargins {
    sectionTop: string;
}

declare module "styled-components" {
    export interface DefaultTheme {
        colors: ThemeType;
        fonts: ThemeFonts;
        paddings: ThemePaddings;
        margins: ThemeMargins;
    }
}
