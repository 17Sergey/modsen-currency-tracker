import { FC } from "react";
import { Marker } from "react-map-gl";

import { useMapMarkerPopup } from "@hooks/useMapMarkerPopup.ts";
import CustomPopup from "@pages/Bank/BankMap/CustomPopup";

import { StyledMapMarkerDefault, StyledPopupContent } from "./styled.ts";

type UserLocationMarkerProps = {
    userLocation: CoordinatesType;
};

export const UserLocationMarker: FC<UserLocationMarkerProps> = ({ userLocation }) => {
    const { showPopup, openPopup, closePopup } = useMapMarkerPopup();

    return (
        <Marker latitude={userLocation.latitude} longitude={userLocation.longitude} onClick={openPopup}>
            <StyledMapMarkerDefault />
            {showPopup && (
                <CustomPopup latitude={userLocation.latitude} longitude={userLocation.longitude} onClose={closePopup}>
                    <StyledPopupContent>
                        <strong>Your current location</strong>
                        <div>
                            <p>{userLocation.latitude}</p>
                            <p>{userLocation.longitude}</p>
                        </div>
                        <button onClick={closePopup}>Close popup</button>
                    </StyledPopupContent>
                </CustomPopup>
            )}
        </Marker>
    );
};
