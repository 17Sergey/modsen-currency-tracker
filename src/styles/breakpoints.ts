interface SizePx {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
}

const sizePx: SizePx = {
    xs: "375px", // for small screen mobile
    sm: "400px", // for mobile screen
    md: "600px", // for tablets
    lg: "900px", // for bigger tablets
    xl: "1280px", // for desktop / monitors
    xxl: "1920px", // for big screens
};

export const device = {
    xs: `(max-width: ${sizePx.xs})`,
    sm: `(max-width: ${sizePx.sm})`,
    md: `(max-width: ${sizePx.md})`,
    lg: `(max-width: ${sizePx.lg})`,
    xl: `(max-width: ${sizePx.xl})`,
    xxl: `(max-width: ${sizePx.xxl})`,
};
