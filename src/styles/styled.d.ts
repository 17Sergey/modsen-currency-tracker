import "styled-components";

interface ThemeColors {
    primary: HEX;
    primaryTransparent: HEX;
    secondary: HEX;
    background: HEX;
    white: HEX;
    text: HEX;
    textTransparent: HEX;
    lightGray: HEX;
    inputBackground: HEX;
    error: HEX;
    [key: string]: HEX;
}

interface ThemeFonts {
    primary: string;
    secondary: string;
    fontSize: {
        small: string;
        base: string;
        medium: string;
        subheading: string;
        heading: string;
        headingLarge: string;
    };
}

declare module "styled-components" {
    export interface DefaultTheme {
        colors: ThemeColors;
        fonts: ThemeFonts;
    }
}
