import { useCallback, useEffect, useState } from "react";

import { DEFAULT_TOAST_LIFETIME } from "@constants/timelinePage";

export const useToast = (lifetime = DEFAULT_TOAST_LIFETIME) => {
    const [isToastVisible, setIsToastVisible] = useState(false);

    useEffect(() => {
        if (isToastVisible) {
            setTimeout(() => setIsToastVisible(false), lifetime);
        }
    }, [isToastVisible, lifetime]);

    const openToast = useCallback(() => {
        setIsToastVisible(true);
    }, []);

    const closeToast = useCallback(() => {
        setIsToastVisible(false);
    }, []);

    return { isToastVisible, openToast, closeToast };
};
