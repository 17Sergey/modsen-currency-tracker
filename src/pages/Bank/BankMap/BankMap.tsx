import { useEffect, useState } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import CurrencyLogoUrl from "@assets/icons/CurrencyLogo.svg?url";
import { DEFAULT_COORDINATES } from "@constants/constants.ts";

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

    return (
        <StyledWrapper>
            <Map
                mapboxAccessToken={process.env.MAPBOX_GL_TOKEN}
                {...viewState}
                onMove={(evt) => setViewState(evt.viewState)}
                style={{ width: "100%", height: 500 }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
            >
                <Marker longitude={viewState.longitude} latitude={viewState.latitude}>
                    <img src={CurrencyLogoUrl} alt="Marker" />
                    <span>Marker</span>
                </Marker>
            </Map>
        </StyledWrapper>
    );
};
