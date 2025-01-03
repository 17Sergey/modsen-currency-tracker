import { PATHS } from "../../src/constants/constants.ts";
import { BASE_URL, DATA_CY, DEFAULT_PORT } from "../../src/constants/cypress.ts";

describe("Bank Page Tests", () => {
    beforeEach(() => {
        cy.visit(`${BASE_URL}:${DEFAULT_PORT}${PATHS.BANK}`);
    });

    it("should search for a currency and clear the search", () => {
        cy.get(`[data-cy="${DATA_CY.MAP_SEARCH_INPUT}"]`).within(() => {
            cy.get("input").type("U");

            cy.get(`[data-cy="${DATA_CY.SEARCH_CLEAR_BUTTON}"]`).click();

            cy.get("div[aria-label='optionsList']").should("not.exist");
        });
    });

    it("should find input and options list", () => {
        cy.get(`[data-cy="${DATA_CY.MAP_SEARCH_INPUT}"]`).within(() => {
            cy.get("input").type("U");

            cy.get("div[aria-label='optionsList']").should("be.visible");
            cy.get("div[aria-label='optionsList']").children().first().click();
        });
    });

    it("should display the map", () => {
        cy.get(`[data-cy="${DATA_CY.MAP}"]`).should("exist");
    });

    it("should display the correct number of markers on the map", () => {
        cy.get(`[data-cy="${DATA_CY.MAP_SEARCH_INPUT}"]`).type("USD");
        cy.get(`[data-cy="${DATA_CY.MAP_MARKER}"]`).should("have.length.greaterThan", 0);
    });

    it("should open and close a marker popup", () => {
        cy.get(`[data-cy="${DATA_CY.MAP_MARKER}"]`).first().click({ force: true });

        cy.get(`[data-cy="${DATA_CY.POPUP_CONTENT}"]`).should("exist");
        cy.get(`[data-cy="${DATA_CY.POPUP_CONTENT}"] button`).should("exist").click({ force: true });
    });

    it("should show user location on the map", () => {
        cy.window().then((win) => {
            cy.stub(win.navigator.geolocation, "getCurrentPosition").callsFake((success) => {
                success({
                    coords: {
                        latitude: 13.34,
                        longitude: 56.78,
                    },
                });
            });
        });

        cy.reload();
        cy.get(`[data-cy="${DATA_CY.USER_LOCATION_MARKER}"]`).should("exist");
    });
});
