import {Given, And, Then } from "cypress-cucumber-preprocessor/steps";

Given(`I visit test website`, ()=>{
    cy.visit('/');
});


Given(`I clicked login link`, ()=>{
    cy.contains('Log In').click();
});

Given(`I login as user {string} and {string}`, (userName, Password)=>{
    cy.get('input[name="email"]').type(userName);
    cy.get('input[name="password"]').type(Password, {log: false});
    cy.contains('LOGIN').click();
});