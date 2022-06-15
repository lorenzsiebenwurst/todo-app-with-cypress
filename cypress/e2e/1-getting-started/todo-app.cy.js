/// <reference types="cypress" />

describe("todo-app", () => {
  it("should exist", () => {
    cy.visit("http://localhost:3000");
  });
});
