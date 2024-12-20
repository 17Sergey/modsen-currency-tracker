import { FC } from "react";
import { Marker } from "react-map-gl";

import { useMapMarkerPopup } from "@hooks/useMapMarkerPopup.ts";

import CustomPopup from "../CustomPopup/index.tsx";

import { StyledMapMarker, StyledPopupContent } from "./styled.ts";

type BankMarkerProps = {
    bankData: MatchedBankResultType;
};

export const BankMarker: FC<BankMarkerProps> = ({ bankData }) => {
    const { coordinates, bank, currencies } = bankData;
    const { latitude, longitude } = coordinates;

    const { showPopup, openPopup, closePopup } = useMapMarkerPopup();

    return (
        <Marker key={`${latitude}:${longitude}`} longitude={longitude} latitude={latitude} onClick={openPopup}>
            <StyledMapMarker />
            {showPopup && (
                <CustomPopup latitude={latitude} longitude={longitude} onClose={closePopup}>
                    <StyledPopupContent>
                        <strong>{bank}</strong>
                        <ul>
                            {currencies.map((currency) => (
                                <li key={currency}>{currency}</li>
                            ))}
                        </ul>
                        <button onClick={closePopup}>Close popup</button>
                    </StyledPopupContent>
                </CustomPopup>
            )}
        </Marker>
    );
};
