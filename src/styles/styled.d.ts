import "styled-components";

import { darkTheme } from "./theme.ts";

type ThemeInterface = typeof darkTheme;

declare module "styled-components" {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface DefaultTheme extends ThemeInterface {}
}
