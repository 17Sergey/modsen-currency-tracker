describe("Theme Toggle", () => {
    beforeEach(() => {
        // Замените на URL вашего приложения
        cy.visit("http://localhost:8080"); // Убедитесь, что ваше приложение запущено
    });

    it("should change body background color on theme toggle", () => {
        // Проверяем начальный цвет фона для темной темы
        cy.get("body").should("have.css", "background-color", "rgb(3, 3, 4)"); // Цвет темного фона в RGB

        // Кликаем по кнопке переключения темы
        cy.get('[data-cy="toggleThemeDesktop"]').click({ multiple: true });

        // Проверяем, что цвет фона изменился на светлую тему
        cy.get("body").should("have.css", "background-color", "rgb(255, 255, 255)"); // Цвет светлого фона в RGB
    });
});
