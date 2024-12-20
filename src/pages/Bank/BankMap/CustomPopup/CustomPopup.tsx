import { ComponentProps, FC, PropsWithChildren } from "react";
import { Popup } from "react-map-gl";

import { DEFAULT_MAP_POPUP_OFFSET } from "@constants/constants.ts";

type CustomPopupProps = PropsWithChildren & ComponentProps<typeof Popup>;

export const CustomPopup: FC<CustomPopupProps> = ({
    latitude,
    longitude,
    onClose,
    children,
    offset = DEFAULT_MAP_POPUP_OFFSET,
    ...props
}) => (
    <Popup
        latitude={latitude}
        longitude={longitude}
        offset={offset}
        onClose={onClose}
        closeOnClick={false}
        focusAfterOpen={true}
        {...props}
    >
        {children}
    </Popup>
);
