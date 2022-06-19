/// <reference types="jest" />

import { isDuplicate } from "./lib";

describe("checkDublicate", function () {
  it("should check dublicate", function () {
    const todos = [{ todo: "Test", done: false }];
    let todo = "Test";

    expect(isDuplicate(todo, todos)).toEqual(true);
  });
});
