import { describe, expect, test } from "vitest";
import fib from "../src/fib.js";

describe("fibonacci sequence", () => {
  test("input of 2", () => {
    expect(fib(2)).toStrictEqual([0, 1]);
  });

  test("input of 2 or less", () => {
    expect(fib(1)).toStrictEqual([]);
    expect(fib(0)).toStrictEqual([]);
    expect(fib(-1)).toStrictEqual([]);
  });

  test("input of 3", () => {
    expect(fib(3)).toStrictEqual([0, 1, 1]);
  });

  test("input of 4", () => {
    expect(fib(4)).toStrictEqual([0, 1, 1, 2]);
  });

  test("input of 8", () => {
    expect(fib(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
});
