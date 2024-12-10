import { FC } from "react";

import LoaderIcon from "@assets/icons/Loader.svg";

import { StyledLoader } from "./styled.ts";

interface LoaderProps {
    variant: LoaderVariants;
}

export const Loader: FC<LoaderProps> = ({ variant = "md" }) => (
    <StyledLoader $variant={variant}>
        <LoaderIcon />
    </StyledLoader>
);
