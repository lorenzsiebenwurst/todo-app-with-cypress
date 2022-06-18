/// <reference types="cypress" />

describe("todo-app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should have empty list by default", () => {
    cy.get("#todo-list li").should("have.length", 0);
  });

  it("add new todo", () => {
    const newTodo = "Learn CSS";
    cy.get("#new-todo").type(newTodo);
    cy.get("#add-todo").click();
    cy.get("#todo-list").should("have.length", 1);
    cy.get("#todo-list li").should("have.text", newTodo);
  });

  it("filter done", () => {
    cy.get("#new-todo").type("Learn HTML");
    cy.get("#add-todo").click();

    cy.get("#new-todo").type("Learn CSS");
    cy.get("#add-todo").click();

    cy.contains("Learn CSS").find("input[type=checkbox]").check();

    cy.get("#filter-done").click();

    cy.get("#todo-list").should("have.length", 1);
  });

  it("filter open", () => {
    cy.get("#new-todo").type("Learn HTML");
    cy.get("#add-todo").click();

    cy.get("#new-todo").type("Learn CSS");
    cy.get("#add-todo").click();

    cy.contains("Learn CSS").find("input[type=checkbox]").check();

    cy.get("#filter-open").click();

    cy.get("#todo-list").should("have.length", 1);
  });

  it("delete done todos", () => {
    cy.get("#new-todo").type("Learn HTML");
    cy.get("#add-todo").click();

    cy.get("#new-todo").type("Learn CSS");
    cy.get("#add-todo").click();

    cy.contains("Learn CSS").find("input[type=checkbox]").check();

    cy.get("#delete-todos").click();
    cy.get("#todo-list").should("have.length", 1);
  });

  it("duplicate check", () => {
    cy.get("#new-todo").type("Learn HTML");
    cy.get("#add-todo").click();

    cy.get("#new-todo").type("Learn HTML");
    cy.get("#add-todo").click();

    cy.get("#todo-list").should("have.length", 1);
  });
});
