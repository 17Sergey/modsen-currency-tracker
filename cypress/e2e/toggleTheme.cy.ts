import { BASE_URL, DATA_CY, DEFAULT_PORT } from "../../src/constants/cypress.ts";

describe("Theme Toggle", () => {
    beforeEach(() => {
        cy.visit(`${BASE_URL}:${DEFAULT_PORT}`);
    });

    it("should change body background color on theme toggle", () => {
        cy.get("body").then(($body) => {
            const initialColor = $body.css("background-color");

            cy.get(`[data-cy="${DATA_CY.TOGGLE_THEME}"]`).click({ multiple: true });

            cy.get("body").should(($newBody) => {
                const newColor = $newBody.css("background-color");
                expect(newColor).to.not.equal(initialColor);
            });
        });
    });
});
