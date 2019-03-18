/// <reference types="Cypress" />

context('Test Casses', () => {

    beforeEach('Delete api', ()=>{
        cy.request({
            method: 'DELETE',
            url: 'http://localhost:3000/posts/2',
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.body).to.be.empty;
        });
    });

    it('Get Api functionality test', () => {
        cy.request('http://localhost:3000/posts/1').its('body').should('have.property', 'id');
    });

    it('Post api', ()=>{
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/posts',
            body: {
                "id":2,
                "title": 'raj',
                "author":"Hasmukh"
            }
        }).then((response) => {
            expect(response.body).to.has.property('title', 'raj');
        });
    });
});
