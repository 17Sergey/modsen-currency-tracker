import styled, { keyframes } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

import { Z_INDEX_MANAGER } from "@constants/constants";

const slideIn = (theme: DefaultTheme) => keyframes`
  0% {
    top: -100%;
  }
  10% {
    top: ${theme.margins.toast};
  }
  60% {
    top: ${theme.margins.toast};
  }
  100% {
    top: -100%;
  }
`;

export const StyledToast = styled.div<{ $lifetimeInSeconds: number }>`
    position: fixed;
    top: -100%;
    left: 50%;
    z-index: ${Z_INDEX_MANAGER.TOAST};
    transform: translateX(-50%);

    background-color: ${({ theme }) => theme.colors.logoGradient.first};
    padding: ${({ theme }) => theme.paddings.base} ${({ theme }) => theme.paddings.md};
    border-radius: ${({ theme }) => theme.paddings.sm};

    animation: ${({ theme }) => slideIn(theme)} ease forwards;
    animation-duration: ${({ $lifetimeInSeconds }) => $lifetimeInSeconds / 1000}s;

    text-align: center;
`;
