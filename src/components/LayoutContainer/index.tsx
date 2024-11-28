import { StyledContainer } from "./styled.ts";

export function LayoutContainer({ children }: { children: React.ReactNode }) {
    return <StyledContainer>{children}</StyledContainer>;
}
