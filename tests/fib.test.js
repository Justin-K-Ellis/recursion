import { describe, expect, test } from "vitest";
import makeFibArr from "../src/fib.js";

describe("make an array of nums in the fibonacci sequence", () => {
  test("input n = 2", () => {
    expect(makeFibArr(2)).toStrictEqual([0, 1]);
  });

  test("input n = 3", () => {
    expect(makeFibArr(3)).toStrictEqual([0, 1, 1]);
  });

  test("input n = 4", () => {
    expect(makeFibArr(4)).toStrictEqual([0, 1, 1, 2]);
  });

  test("input n = 8", () => {
    expect(makeFibArr(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
});
