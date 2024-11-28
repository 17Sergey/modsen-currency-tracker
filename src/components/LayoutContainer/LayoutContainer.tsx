import { StyledContainer } from "./styled.ts";

export const LayoutContainer = ({ children }: { children: React.ReactNode }) => {
    return <StyledContainer>{children}</StyledContainer>;
};
