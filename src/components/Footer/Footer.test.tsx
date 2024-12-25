import { screen } from "@testing-library/react";
import { renderWithProviders } from "@utils/testing/renderWithProviders.tsx";

import { Footer } from "./Footer.tsx";

describe("Footer", () => {
    test("Footer contains company name", () => {
        renderWithProviders(<Footer />);
        expect(screen.getByText("Modsen Currency Tracker")).toBeInTheDocument();
    });

    test("Footer contains description text", () => {
        renderWithProviders(<Footer />);
        expect(screen.getByText(/Since then, the company has grown organically/)).toBeInTheDocument();
    });

    test("Footer contains navigation links", () => {
        renderWithProviders(<Footer />);

        expect(screen.getByText("General")).toBeInTheDocument();
        expect(screen.getByText("Product")).toBeInTheDocument();
        expect(screen.getByText("Community")).toBeInTheDocument();

        expect(screen.getByText("Market")).toBeInTheDocument();
        expect(screen.getByText("Service")).toBeInTheDocument();
        expect(screen.getByText("Sparks")).toBeInTheDocument();
        expect(screen.getByText("Snaps")).toBeInTheDocument();
        expect(screen.getByText("Ideas")).toBeInTheDocument();
        expect(screen.getByText("Streams")).toBeInTheDocument();
    });

    test("Footer contains copyright information", () => {
        renderWithProviders(<Footer />);
        expect(screen.getByText("Startsup © 2023-2024, All Rights Reserved")).toBeInTheDocument();
    });
});
