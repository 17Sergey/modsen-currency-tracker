import { FC } from "react";

import LoaderIcon from "@assets/icons/Loader.svg";
import { DATA_CY } from "@constants/cypress.ts";

import { StyledLoader } from "./styled.ts";

interface LoaderProps {
    variant: LoaderVariants;
}

export const Loader: FC<LoaderProps> = ({ variant = "md" }) => (
    <StyledLoader $variant={variant} data-cy={DATA_CY.LOADER}>
        <LoaderIcon />
    </StyledLoader>
);
