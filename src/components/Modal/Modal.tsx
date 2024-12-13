import { ComponentProps, FC } from "react";
import { useScrollLock } from "usehooks-ts";

import Portal from "@components/Portal";
import { useOnEscapeKey } from "@hooks/useOnEscapeKey.ts";

import { StyledModalBox, StyledOverlay } from "./styled.ts";

type ModalProps = {
    onClose: VoidFunction;
} & ComponentProps<"dialog">;

export const Modal: FC<ModalProps> = ({ children, onClose }) => {
    useOnEscapeKey(onClose);
    useScrollLock();

    return (
        <Portal rootId="modal-portal">
            <div role="dialog" aria-modal="true">
                <StyledOverlay onClick={onClose}></StyledOverlay>
                <StyledModalBox>{children}</StyledModalBox>
            </div>
        </Portal>
    );
};
