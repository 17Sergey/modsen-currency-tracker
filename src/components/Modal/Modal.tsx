import { ComponentProps, FC } from "react";
import { useScrollLock } from "usehooks-ts";

import Portal from "@components/Portal";
import { useOnEscapeKey } from "@hooks/useOnEscapeKey.ts";

import { StyledModalBox, StyledWrapper } from "./styled.ts";

type ModalProps = {
    onClose: VoidFunction;
} & ComponentProps<"dialog">;

export const Modal: FC<ModalProps> = ({ children, onClose }) => {
    useOnEscapeKey(onClose);
    useScrollLock();

    return (
        <Portal rootId="modal-portal">
            <StyledWrapper role="dialog" aria-modal="true" onClick={onClose}>
                <StyledModalBox onClick={(e) => e.stopPropagation()}>{children}</StyledModalBox>
            </StyledWrapper>
        </Portal>
    );
};
