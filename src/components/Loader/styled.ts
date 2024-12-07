import styled from "styled-components";

export const StyledLoader = styled.div<{ $variant: LoaderVariants }>`
    width: ${({ theme, $variant }) => theme.widths.loader[$variant]};
`;
