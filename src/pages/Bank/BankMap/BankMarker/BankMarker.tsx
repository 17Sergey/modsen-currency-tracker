import React, { Component } from "react";
import { Marker } from "react-map-gl";

import { DATA_CY } from "@constants/cypress.ts";

import CustomPopup from "../CustomPopup/index.tsx";

import { StyledMapMarker, StyledPopupContent } from "./styled.ts";

type BankMarkerProps = {
    bankData: MatchedBankResultType;
};

type BankMarkerState = {
    showPopup: boolean;
};

export class BankMarker extends Component<BankMarkerProps, BankMarkerState> {
    constructor(props: BankMarkerProps) {
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
        const { bankData } = this.props;
        const { coordinates, bank, currencies } = bankData;
        const { latitude, longitude } = coordinates;
        const { showPopup } = this.state;

        return (
            <Marker key={`${latitude}:${longitude}`} longitude={longitude} latitude={latitude} onClick={this.openPopup}>
                <StyledMapMarker data-cy={DATA_CY.MAP_MARKER} />
                {showPopup && (
                    <CustomPopup latitude={latitude} longitude={longitude} onClose={this.closePopup}>
                        <StyledPopupContent data-cy={DATA_CY.POPUP_CONTENT}>
                            <strong>{bank}</strong>
                            <ul>
                                {currencies.map((currency) => (
                                    <li key={currency}>{currency}</li>
                                ))}
                            </ul>
                            <button onClick={this.closePopup}>Close popup</button>
                        </StyledPopupContent>
                    </CustomPopup>
                )}
            </Marker>
        );
    }
}
