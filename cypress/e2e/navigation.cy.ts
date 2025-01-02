import { PATHS } from "../../src/constants/constants.ts";
import { BASE_URL, DEFAULT_PORT } from "../../src/constants/cypress.ts";

describe("Navigation Tests", () => {
    beforeEach(() => {
        cy.visit(`${BASE_URL}:${DEFAULT_PORT}`);
    });

    it("should navigate to Home page", () => {
        cy.get(`a[href="${PATHS.HOME}"]`).click({ multiple: true, force: true });
        cy.url().should("include", PATHS.HOME);
    });

    it("should navigate to Timeline page", () => {
        cy.get(`a[href="${PATHS.TIMELINE}"]`).click({ multiple: true, force: true });
        cy.url().should("include", PATHS.TIMELINE);
    });

    it("should navigate to Bank page", () => {
        cy.get(`a[href="${PATHS.BANK}"]`).click({ multiple: true, force: true });
        cy.url().should("include", PATHS.BANK);
    });

    it("should navigate to Contacts page", () => {
        cy.get(`a[href="${PATHS.CONTACTS}"]`).click({ multiple: true, force: true });
        cy.url().should("include", PATHS.CONTACTS);
    });

    it("should redirect to Home page with incorrect url", () => {
        cy.visit(`${BASE_URL}:${DEFAULT_PORT}/incorrectUrl`);
        cy.url().should("include", PATHS.HOME);
    });
});
