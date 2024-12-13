import { useState } from "react";

import { useDisableBodyScroll } from "./useDisableBodyScroll.ts";

export const useModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useDisableBodyScroll(isModalOpen);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return { isModalOpen, openModal, closeModal };
};
