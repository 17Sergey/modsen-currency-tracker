import styled from "styled-components";

import MapMarkerIconDefault from "@assets/icons/MapMarkerIconDefault.svg";
import { popupContent } from "@styles/mixins/popupContent";

export const StyledPopupContent = styled.div`
    ${popupContent}
`;
export const StyledMapMarkerDefault = styled(MapMarkerIconDefault)`
    transform: scale(0.6);
    color: ${({ theme }) => theme.colors.mapSelectedTag};
`;
