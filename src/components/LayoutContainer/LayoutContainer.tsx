import { PropsWithChildren } from "react";

import { StyledContainer } from "./styled.ts";

export const LayoutContainer: React.FC<PropsWithChildren> = ({ children }) => {
    return <StyledContainer>{children}</StyledContainer>;
};
