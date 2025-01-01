import React, { Component } from "react";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { BANKS_DATA, DEFAULT_COORDINATES, DEFAULT_MAP_HEIGHT, DEFAULT_ZOOM } from "@constants/bankPage.ts";
import { findBanksByCurrency } from "@utils/findBanksByCurrency.ts";

import BankMarker from "./BankMarker/index.ts";
import { StyledWrapper } from "./styled.ts";
import UserLocationMarker from "./UserLocationMarker/index.ts";

type BankMapProps = {
    foundCurrency: string;
};

type UserLocationType = {
    longitude: number;
    latitude: number;
    zoom: number;
};

type BankMapState = {
    userLocation: UserLocationType | null;
};

export class BankMap extends Component<BankMapProps, BankMapState> {
    constructor(props: BankMapProps) {
        super(props);
        this.state = {
            userLocation: null,
        };
    }

    componentDidMount() {
        this.getUserLocation();
    }

    getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { longitude, latitude } = position.coords;
                this.setState({
                    userLocation: {
                        longitude,
                        latitude,
                        zoom: DEFAULT_ZOOM,
                    },
                });
            });
        }
    };

    render() {
        const { foundCurrency } = this.props;
        const { userLocation } = this.state;

        const foundBanksWithCurrency = findBanksByCurrency(foundCurrency, BANKS_DATA);

        const bankMarkers = foundBanksWithCurrency.map((bankData) => (
            <BankMarker
                key={`${bankData.coordinates.latitude}:${bankData.coordinates.longitude}`}
                bankData={bankData}
            />
        ));

        return (
            <StyledWrapper>
                <Map
                    reuseMaps
                    initialViewState={DEFAULT_COORDINATES}
                    mapboxAccessToken={process.env.MAPBOX_GL_TOKEN}
                    style={{ width: "100%", height: DEFAULT_MAP_HEIGHT }}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                >
                    {!!userLocation && <UserLocationMarker userLocation={userLocation} />}
                    {bankMarkers}
                </Map>
            </StyledWrapper>
        );
    }
}
