import { LazyBank } from "@pages/Bank/LazyBank.tsx";
import { LazyContacts } from "@pages/Contacts/LazyContacts.tsx";
import { LazyHome } from "@pages/Home/LazyHome.tsx";
import { LazyTimeline } from "@pages/Timeline/LazyTimeline.tsx";

import { PATHS } from "./constants.ts";

export const ROUTES = [
    { path: PATHS.HOME, Component: LazyHome },
    { path: PATHS.TIMELINE, Component: LazyTimeline },
    { path: PATHS.BANK, Component: LazyBank },
    { path: PATHS.CONTACTS, Component: LazyContacts },
    { path: PATHS.CATCH_ALL, Component: LazyHome },
];
