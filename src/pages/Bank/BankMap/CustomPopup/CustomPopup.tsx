import React, { Component, ComponentProps, PropsWithChildren } from "react";
import { Popup } from "react-map-gl";

import { DEFAULT_MAP_POPUP_OFFSET } from "@constants/bankPage";

type CustomPopupProps = PropsWithChildren & ComponentProps<typeof Popup>;

export class CustomPopup extends Component<CustomPopupProps> {
    render() {
        const { latitude, longitude, onClose, children, offset = DEFAULT_MAP_POPUP_OFFSET, ...props } = this.props;

        return (
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
    }
}
