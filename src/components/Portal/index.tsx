import { FC, PropsWithChildren } from "react";
import ReactDOM from "react-dom";

type PortalProps = PropsWithChildren & { rootId: string };

const Portal: FC<PortalProps> = ({ children, rootId }) => {
    let portalRoot = document.getElementById(rootId);

    if (!portalRoot) {
        portalRoot = document.createElement("div");
        portalRoot.setAttribute("id", rootId);
        document.body.appendChild(portalRoot);
    }

    return ReactDOM.createPortal(<>{children}</>, portalRoot);
};

export default Portal;
