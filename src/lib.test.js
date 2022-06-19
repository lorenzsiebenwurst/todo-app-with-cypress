/// <reference types="jest" />

import { isDuplicate } from "./lib";

describe("checkDublicate", function () {
  it("should check dublicate", function () {
    let todos = { todo: "Test", done: false };
    let todo = "Test";

    expect(isDuplicate(todo, todos)).toEqual(false);
  });
});
