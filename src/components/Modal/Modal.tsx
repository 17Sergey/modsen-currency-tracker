import { ComponentProps, FC } from "react";

import Portal from "@components/Portal";
import { useOnEscapeKey } from "@hooks/useOnEscapeKey.ts";

import { StyledModalBox, StyledOverlay } from "./styled.ts";

type ModalProps = {
    onClose: VoidFunction;
} & ComponentProps<"dialog">;

export const Modal: FC<ModalProps> = ({ children, onClose }) => {
    useOnEscapeKey(onClose);

    return (
        <Portal rootId="modal-portal">
            <div role="dialog" aria-modal="true">
                <StyledOverlay onClick={onClose} />
                <StyledModalBox>{children}</StyledModalBox>
            </div>
        </Portal>
    );
};
