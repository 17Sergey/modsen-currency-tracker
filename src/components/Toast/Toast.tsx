import { PropsWithChildren } from "react";

import { StyledToast } from "./styled.ts";

type ToastProps = PropsWithChildren & {
    lifetimeInSeconds: number;
};

export const Toast = ({ children, lifetimeInSeconds }: ToastProps) => (
    <StyledToast $lifetimeInSeconds={lifetimeInSeconds}>{children}</StyledToast>
);
