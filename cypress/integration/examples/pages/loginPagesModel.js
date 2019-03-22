/// <reference types="Cypress" />
// Page object model
export class LoginPage {
    performLogin (userName, Password) {
        cy.get('input[name="email"]').type(userName);
        cy.get('input[name="password"]').type(Password, {log: false});
    }

    clickLoginButton() {
        cy.contains('LOGIN').click();
    }
}

export const loginPage = new LoginPage();