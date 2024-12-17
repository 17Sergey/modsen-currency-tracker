import { useEffect, useMemo, useState } from "react";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// import MapMarkerUrl from "@assets/icons/MapMarkerIcon.svg?url";
import { BANKS, BANKS_DATA, DEFAULT_COORDINATES } from "@constants/constants.ts";

import { StyledWrapper } from "./styled.ts";

export const BankMap = () => {
    const [viewState, setViewState] = useState(DEFAULT_COORDINATES);

    useEffect(() => {
        const getUserLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const { longitude, latitude } = position.coords;
                    setViewState({
                        longitude,
                        latitude,
                        zoom: 12,
                    });
                });
            }
        };

        getUserLocation();
    }, []);

    const markers = useMemo(() => {
        BANKS.map((bankName) => {
            const { latitude, longitude } = BANKS_DATA[bankName].coordinates;
            console.log(latitude, longitude);

            return null;
            // (
            // <Marker
            //     key={bankName}
            //     longitude={BANKS_DATA[bankName].coordinates.longitude}
            //     latitude={BANKS_DATA[bankName].coordinates.latitude}
            // >
            // <img src={MapMarkerUrl} alt="Marker" />
            // <span>Marker</span>
            // </Marker>
            // );
        });
    }, []);

    return (
        <StyledWrapper>
            <Map
                reuseMaps
                mapboxAccessToken={process.env.MAPBOX_GL_TOKEN}
                {...viewState}
                onMove={(evt) => setViewState(evt.viewState)}
                style={{ width: "100%", height: 500 }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
            >
                {markers}
            </Map>
        </StyledWrapper>
    );
};
