import { sum } from "./Calculator";

it("should sum 2 and 2 and the result must 4", () => {
  expect(sum(2, 2)).toBe(4);
});

it("should sum 2 and 2 even if one of them is a string and result must be 4", () => {
  expect(sum("2", "2")).toBe(4);
});

it("should throw an error if what is provided to the method cannot be summer", () => {
  expect(() => {
    sum("", 2);
  }).toThrowError();

  expect(() => {
    sum([2, 2]);
  }).toThrowError();
});
