import merge from "../src/index";

describe("testing merge function", () => {

    // * case 1: normal arrays with the same length
    test("case 1: normal arrays with same length", () => {
        expect(
        merge([1, 2, 3], [10, 9, 8], [11, 12])
        ).toEqual([1, 2, 3, 8, 9, 10, 11, 12 ]);
    });

    // * case 2: normal arrays with the differnt lengths
    test("case 2: normal arrays with different lengths", () => {
        expect(
        merge([1, 2, 3, 4], [7, 6, 5], [8, 9])
        ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    // * case 3: skipping value
    test("case 3: skipping value", () => {
        expect(
        merge([1, 3, 5], [4, 2, 0], [6, 7])
        ).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
    });

    // * case 4: containing duplicate values
    test("case 4: containing duplicate values", () => {
        expect(
        merge([1, 2, 3], [3, 2, 1], [2, 3])
        ).toEqual([1, 1, 2, 2, 2, 3, 3, 3]);
    });

    // * case 5: containing duplicate value for all
    test("case 5: containing duplicate value for all", () => {
        expect(
        merge([1, 1, 1], [1, 1, 1], [1, 1])
        ).toEqual([1, 1, 1, 1, 1, 1, 1, 1]);
    });

    // * case 6: one empty array
    test("case 6: one empty array", () => {
        expect(
        merge([1, 2, 3], [], [4, 5])
        ).toEqual([1, 2, 3, 4, 5]);
    });

    // * case 7: two empty arrays
    test("case 7: two empty arrays", () => {
        expect(
        merge([], [3, 2, 1], [])
        ).toEqual([1, 2, 3]);
    });

    // * case 8: three empty arrays
    test("case 8: three empty arrays", () => {
        expect(
        merge([], [], [])
        ).toEqual([]);
    });

    // * case 9: containing negative numbers
    test("case 9: containing negative numbers", () => {
        expect(
        merge([-5, -3, 0], [-1, -2, -3], [-4, 2])
        ).toEqual([-5, -4, -3, -3, -2, -1, 0, 2]);
    });

    // * case 10: containing an Infinity
    test("case 10: containing an Infinity", () => {
        expect(
        merge([-5, -3], [Infinity], [-4, 2])
        ).toEqual([-5, -4, -3, 2, Infinity]);
    });

    // * case 11: containing multiple Infinity(s)
    test("case 11: containing multiple Infinity(s)", () => {
        expect(
        merge([Infinity], [Infinity, Infinity], [Infinity])
        ).toEqual([Infinity, Infinity, Infinity, Infinity]);
    });

});