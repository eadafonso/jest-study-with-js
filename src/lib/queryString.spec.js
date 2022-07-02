import { queryString, parse } from "./queryString";

describe("Object to queryString", () => {
  it("should create a valid query string when object is provided", () => {
    const obj = {
      name: "Edvaldo",
      profession: "Developer",
    };

    expect(queryString(obj)).toBe("name=Edvaldo&profession=Developer");
  });

  it("should created a valid query string even when an array is passed as value", () => {
    const obj = {
      name: "Edvaldo",
      abilities: ["JS", "TDD"],
    };

    expect(queryString(obj)).toBe("name=Edvaldo&abilities=JS,TDD");
  });
});

describe("QueryString to object", () => {
  it("should convert a query string to object", () => {
    const qs = "name=Edvaldo&profession=developer";

    expect(parse(qs)).toEqual({
      name: "Edvaldo",
      profession: "developer",
    });
  });

  it("should convert a query string of a single key value object", () => {
    const qs = "name=Edvaldo";

    expect(parse(qs)).toEqual({
      name: "Edvaldo",
    });
  });

  it("should convert a query string to object taking care of comma separated values", () => {
    const qs = "name=Edvaldo&abilities=JS,TDD";

    expect(parse(qs)).toEqual({
      name: "Edvaldo",
      abilities: ["JS", "TDD"],
    });
  });
});
