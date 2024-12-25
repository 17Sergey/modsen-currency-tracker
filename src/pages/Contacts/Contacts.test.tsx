import { screen } from "@testing-library/react";
import { renderWithProviders } from "@utils/testing/renderWithProviders.tsx";

import { Contacts } from "./Contacts.tsx";

test("Header contains correct text", () => {
    renderWithProviders(<Contacts />);
    expect(screen.getByText("Our contacts:")).toBeInTheDocument();
});

test("Address is displayed correctly", () => {
    renderWithProviders(<Contacts />);
    expect(screen.getByText("Republic of Belarus, Minsk, prospekt Nezalezhnasci, 220")).toBeInTheDocument();
});

test("Company information is displayed correctly", () => {
    renderWithProviders(<Contacts />);
    expect(screen.getByText("Since 2016")).toBeInTheDocument();
    expect(screen.getByText(/The company was created in 2016/)).toBeInTheDocument();
});

test("Contact information is displayed correctly", () => {
    renderWithProviders(<Contacts />);
    expect(screen.getByText("Email:")).toBeInTheDocument();
    expect(screen.getByText("modsencurrencytracker@gmail.com")).toBeInTheDocument();
    expect(screen.getByText("Phone:")).toBeInTheDocument();
    expect(screen.getByText("+375 (29) 209-80-81")).toBeInTheDocument();
});
