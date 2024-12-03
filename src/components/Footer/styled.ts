import styled from "styled-components";

export const StyledFooter = styled.footer`
    margin-top: ${({ theme }) => theme.margins.sectionTop};
`;

export const StyledFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
`;

export const StyledLeft = styled.div`
    margin-top: ${({ theme }) => theme.margins.sectionTop};
`;

export const StyledCaption = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    img {
        width: 2rem;
        height: 2rem;
    }

    p {
        font-weight: ${({ theme }) => theme.fonts.weight.semibold};
        font-size: ${({ theme }) => theme.fonts.size.medium};

        background: linear-gradient(
            to right,
            ${({ theme }) => theme.colors.captionGradient.first} 0%,
            ${({ theme }) => theme.colors.captionGradient.second} 49%,
            ${({ theme }) => theme.colors.captionGradient.third} 100%
        );

        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

export const StyledDescription = styled.p`
    margin-top: 1.5rem;
    max-width: 400px;
    line-height: 170%;
`;

export const StyledFooterNav = styled.nav`
    width: 100%;
    max-width: 500px;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
`;

export const StyledNavBlock = styled.div`
    span {
        color: ${({ theme }) => theme.colors.textPrimary};
        font-weight: ${({ theme }) => theme.fonts.weight.regular};
        font-size: ${({ theme }) => theme.fonts.size.medium};
    }

    ul {
        margin-top: 1.5rem;

        // TODO: mixins for repeated css
        li {
            font-weight: ${({ theme }) => theme.fonts.weight.regular};
            color: ${({ theme }) => theme.colors.textFooter};
            margin-top: 0.5rem;
        }
    }
`;

export const StyledCopywright = styled.div`
    padding: ${({ theme }) => theme.paddings.pageTop} 0;

    p {
        font-weight: ${({ theme }) => theme.fonts.weight.regular};
        color: ${({ theme }) => theme.colors.textFooter};

        max-width: fit-content;
        margin: 0 auto;
    }
`;
