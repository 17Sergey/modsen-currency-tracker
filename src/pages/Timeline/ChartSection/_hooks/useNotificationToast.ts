import { useEffect } from "react";

import { DEFAULT_TOAST_LIFETIME } from "@constants/constants";
import { useToast } from "@hooks/useToast";
import { ChartPublisher } from "@utils/Publisher/ChartPublisher";

export const useNotificationToast = () => {
    const { isToastVisible, openToast } = useToast(DEFAULT_TOAST_LIFETIME);

    useEffect(() => {
        const showNotification = () => {
            openToast();
        };

        ChartPublisher.subscribe(showNotification);
    }, [openToast]);

    return { isToastVisible, openToast };
};
