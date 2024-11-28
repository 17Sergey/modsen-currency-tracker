import "styled-components";

interface ThemeColors {
    background: string;
    backgroundNeutral: string;

    textPrimary: string;
    textNeutral: string;
    textNeutralTransparent: string;
    textFooter: string;

    primary: string;
    primaryTransparent: string;

    border: string;
    gray: string;
    inputBg: string;

    chartHighlight: string;
    chartUp: string;
    chartDown: string;
    mapSelectedTag: string;

    logoGradient: {
        first: string;
        second: string;
    };

    captionGradient: {
        first: string;
        second: string;
        third: string;
    };

    welcomeGradient: {
        first: string;
        second: string;
    };
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

interface ThemeWidths {
    container: string;
    currencyIcon: string;
}

declare module "styled-components" {
    export interface DefaultTheme {
        colors: ThemeColors;
        fonts: ThemeFonts;
        paddings: ThemePaddings;
        margins: ThemeMargins;
        widths: ThemeWidths;
    }
}
