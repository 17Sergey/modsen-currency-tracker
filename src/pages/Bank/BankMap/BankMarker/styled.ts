import styled from "styled-components";

import MapMarkerIcon from "@assets/icons/MapMarkerIcon.svg";
import { popupContent } from "@styles/mixins/popupContent";

export const StyledPopupContent = styled.div`
    ${popupContent}
`;
export const StyledMapMarker = styled(MapMarkerIcon)`
    transform: scale(0.6);
`;
