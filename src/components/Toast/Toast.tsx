import { PropsWithChildren } from "react";

import { StyledToast } from "./styled.ts";

type ToastProps = PropsWithChildren & {
    lifetimeInSeconds: number;
};

export const Toast = ({ children, lifetimeInSeconds, ...props }: ToastProps) => (
    <StyledToast $lifetimeInSeconds={lifetimeInSeconds} {...props}>
        {children}
    </StyledToast>
);
