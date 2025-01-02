import { Component } from "react";
import { Marker } from "react-map-gl";

import { DATA_CY } from "@constants/cypress.ts";
import CustomPopup from "@pages/Bank/BankMap/CustomPopup";

import { StyledMapMarkerDefault, StyledPopupContent } from "./styled.ts";

type CoordinatesType = {
    latitude: number;
    longitude: number;
};

type UserLocationMarkerProps = {
    userLocation: CoordinatesType;
};

type UserLocationMarkerState = {
    showPopup: boolean;
};

export class UserLocationMarker extends Component<UserLocationMarkerProps, UserLocationMarkerState> {
    constructor(props: UserLocationMarkerProps) {
        super(props);
        this.state = {
            showPopup: false,
        };
    }

    openPopup = () => {
        this.setState({ showPopup: true });
    };

    closePopup = () => {
        this.setState({ showPopup: false });
    };

    render() {
        const { userLocation } = this.props;
        const { showPopup } = this.state;

        return (
            <Marker latitude={userLocation.latitude} longitude={userLocation.longitude} onClick={this.openPopup}>
                <StyledMapMarkerDefault data-cy={DATA_CY.USER_LOCATION_MARKER} />
                {showPopup && (
                    <CustomPopup
                        latitude={userLocation.latitude}
                        longitude={userLocation.longitude}
                        onClose={this.closePopup}
                    >
                        <StyledPopupContent>
                            <strong>Your current location</strong>
                            <div>
                                <p>{userLocation.latitude}</p>
                                <p>{userLocation.longitude}</p>
                            </div>
                            <button onClick={this.closePopup}>Close popup</button>
                        </StyledPopupContent>
                    </CustomPopup>
                )}
            </Marker>
        );
    }
}
