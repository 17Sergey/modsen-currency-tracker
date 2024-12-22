import { FC } from "react";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { BANKS_DATA, DEFAULT_COORDINATES } from "@constants/bankPage.ts";
import { useUserLocation } from "@hooks/useUserLocation.ts";
import { findBanksByCurrency } from "@utils/findBanksByCurrency.ts";

import { BankMarker } from "./BankMarker/BankMarker.tsx";
import { StyledWrapper } from "./styled.ts";
import { UserLocationMarker } from "./UserLocationMarker/UserLocationMarker.tsx";

type BankMapProps = {
    foundCurrency: string;
};

export const BankMap: FC<BankMapProps> = ({ foundCurrency }) => {
    const { userLocation } = useUserLocation();

    const foundBanksWithCurrency = findBanksByCurrency(foundCurrency, BANKS_DATA);

    const bankMarkers = foundBanksWithCurrency.map((bankData) => (
        <BankMarker key={`${bankData.coordinates.latitude}:${bankData.coordinates.longitude}`} bankData={bankData} />
    ));

    return (
        <StyledWrapper>
            <Map
                reuseMaps
                initialViewState={DEFAULT_COORDINATES}
                mapboxAccessToken={process.env.MAPBOX_GL_TOKEN}
                style={{ width: "100%", height: 500 }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
            >
                {userLocation && <UserLocationMarker userLocation={userLocation} />}
                {bankMarkers}
            </Map>
        </StyledWrapper>
    );
};
