import { describe, expect, test } from "vitest";
import { mergeSort, splitArray, mergeArrs } from "../src/mergeSort";

describe("the splitArray helper function", () => {
  test("an even array is split in two", () => {
    expect(splitArray([1, 2, 3, 4])).toStrictEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  test("an odd array is split in two", () => {
    expect(splitArray([1, 2, 3, 4, 5])).toStrictEqual([
      [1, 2],
      [3, 4, 5],
    ]);
  });
});

describe("the merge arrs helper function", () => {
  test("merging [1] and [2]", () => {
    expect(mergeArrs([1], [2])).toStrictEqual([1, 2]);
  });

  test("merging [4] and [3]", () => {
    expect(mergeArrs([4], [3])).toStrictEqual([3, 4]);
  });

  test("merging [1, 3] and [2, 4]", () => {
    expect(mergeArrs([1, 3], [2, 4])).toStrictEqual([1, 2, 3, 4]);
  });
});

describe("the merge sort function", () => {
  test("array sort test 1", () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toStrictEqual([
      0, 1, 1, 2, 3, 5, 8, 13,
    ]);
  });

  test("array sort test 2", () => {
    expect(mergeSort([105, 79, 100, 110])).toStrictEqual([79, 100, 105, 110]);
  });
});
