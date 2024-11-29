import NavigateHome from "@components/NavigateHome";
import Bank from "@pages/Bank";
import Contacts from "@pages/Contacts";
import Home from "@pages/Home";
import Timeline from "@pages/Timeline";

import { PATHS } from "./constants.ts";

export const ROUTES = [
    { path: PATHS.HOME, component: Home },
    { path: PATHS.TIMELINE, component: Timeline },
    { path: PATHS.BANK, component: Bank },
    { path: PATHS.CONTACTS, component: Contacts },
    { path: PATHS.CATCH_ALL, component: NavigateHome },
];
