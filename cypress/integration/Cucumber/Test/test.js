import {Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import {loginPage} from '../../examples/pages/loginPagesModel';
Given(`I visit test website`, ()=>{
    cy.visit('/');
});


Given(`I clicked login link`, ()=>{
    cy.contains('Log In').click();
});

Given(`I login as user {string} and {string}`, (userName, Password)=>{
    loginPage.performLogin(userName, Password);
    loginPage.clickLoginButton();
});