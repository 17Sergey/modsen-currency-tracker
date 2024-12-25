import { LazyBank } from "@pages/Bank/LazyBank.tsx";
import { LazyContacts } from "@pages/Contacts/LazyContacts.tsx";
import { LazyHome } from "@pages/Home/LazyHome.tsx";
import { LazyTimeline } from "@pages/Timeline/LazyTimeline.tsx";

import { PATHS } from "./constants.ts";

export const ROUTES = [
    { path: PATHS.HOME, component: LazyHome },
    { path: PATHS.TIMELINE, component: LazyTimeline },
    { path: PATHS.BANK, component: LazyBank },
    { path: PATHS.CONTACTS, component: LazyContacts },
    { path: PATHS.CATCH_ALL, component: LazyHome },
];
