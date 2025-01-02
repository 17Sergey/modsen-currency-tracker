import { BASE_URL, DATA_CY, DEFAULT_PORT } from "../../src/constants/cypress.ts";

describe("Converter Tests", () => {
    it("should not display currency cards when api request error", () => {
        cy.clearLocalStorage();

        cy.intercept("GET", `https://api.freecurrencyapi.com/v1/*`, {
            statusCode: 401,
            body: [
                { id: 1, name: "USD", value: "1.00" },
                { id: 2, name: "EUR", value: "0.85" },
                { id: 3, name: "GBP", value: "0.75" },
            ],
        }).as("getData");

        cy.visit(`${BASE_URL}:${DEFAULT_PORT}`);

        cy.get(`[data-cy="${DATA_CY.LOADER}"]`).should("be.visible");

        cy.wait("@getData");

        cy.get(`[data-cy="${DATA_CY.LAST_UPDATED_ERROR}"]`).should("exist");

        cy.get(`[data-cy="${DATA_CY.CURRENCIES_CARDS_LIST}"]`).should("not.be.visible");
    });

    it("should fetch and display loader, currency cards, conveter modal and converter works correctly", () => {
        cy.clearLocalStorage();

        cy.intercept("GET", "https://api.freecurrencyapi.com/v1/*", {
            statusCode: 200,
            body: {
                data: {
                    AUD: 1.614400237,
                    CAD: 1.4373402139,
                    CZK: 24.2708444603,
                    EUR: 0.9659701108,
                    GBP: 0.7988601225,
                },
            },
        }).as("getData");

        cy.visit(`${BASE_URL}:${DEFAULT_PORT}`);

        cy.get(`[data-cy="${DATA_CY.LOADER}"]`).should("be.visible");

        cy.wait("@getData");

        cy.get(`[data-cy="${DATA_CY.LAST_UPDATED}"]`).should("contain", "at");

        cy.get(`[data-cy="${DATA_CY.CURRENCY_CARD}"]`).should("have.length", 5);

        cy.get(`[data-cy="${DATA_CY.CURRENCY_CARD}"]`).first().click();

        cy.get(`[data-cy="${DATA_CY.CONVERTER_MODAL}"]`).should("be.visible").and("contain", "Currency Converter");

        cy.get(`[data-cy="${DATA_CY.BASE_CURRENCY_INPUT}"]`).should("have.value", "0");
        cy.get(`[data-cy="${DATA_CY.TARGET_CURRENCY_INPUT}"]`).should("have.value", "0");

        cy.get(`[data-cy="${DATA_CY.BASE_CURRENCY_INPUT}"]`).type("100");
        cy.get(`[data-cy="${DATA_CY.TARGET_CURRENCY_INPUT}"]`).should("not.have.value", "0");

        cy.get(`[data-cy="${DATA_CY.TARGET_CURRENCY_INPUT}"]`).clear({ force: true });
        cy.get(`[data-cy="${DATA_CY.TARGET_CURRENCY_INPUT}"]`).type("9");
        cy.get(`[data-cy="${DATA_CY.BASE_CURRENCY_INPUT}"]`).should("not.have.value", "100");

        cy.get(`[data-cy="${DATA_CY.BASE_CURRENCY_INPUT}"]`)
            .invoke("val")
            .then((baseValue) => {
                cy.get(`[data-cy="${DATA_CY.SELECT_CURRENCY_CONTROL}"]`).click();
                cy.get(`[data-cy="${DATA_CY.SELECT_CURRENCY_CONTROL}"]`).children("ul[role='listbox']").first().click();
                cy.get(`[data-cy="${DATA_CY.BASE_CURRENCY_INPUT}"]`).should("not.have.value", baseValue);
            });

        cy.get(`[data-cy="${DATA_CY.CLOSE_MODAL}"]`).click();
        cy.get(`[data-cy="${DATA_CY.CONVERTER_MODAL}"]`).should("not.exist");
    });
});
