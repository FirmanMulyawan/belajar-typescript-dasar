import { sayHello } from "../src/say-hello";

describe("sayHello", function () {
  it("should return hello firman", function () {
    expect(sayHello("Firman")).toBe("Hello Firman");
  });
});
