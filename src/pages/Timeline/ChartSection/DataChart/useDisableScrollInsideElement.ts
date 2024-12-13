import { useEffect, useRef } from "react";

export const useDisableScrollInsideElement = () => {
    const scrollableRef = useRef<HTMLDivElement>(null);

    const handleScroll = (event: WheelEvent) => {
        if (scrollableRef.current) {
            event.preventDefault();
            scrollableRef.current.scrollTop += event.deltaY;
        }
    };

    useEffect(() => {
        const currentRef = scrollableRef.current;

        currentRef?.addEventListener("wheel", handleScroll, { passive: false });

        return () => {
            currentRef?.removeEventListener("wheel", handleScroll);
        };
    }, []);

    return { scrollableRef };
};
