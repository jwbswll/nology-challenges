import { sum } from "./sum-tdd.js";

const oneOrMoreArgNotNum = new Error("All inputs should be numbers");
const noArgsPassed = new Error("Function needs one or more arguments");

describe("Test cases for sum function", () => {
	test("should throw an error if one or more arguments are not a number", () => {
		expect(() => {
			sum("hello");
		}).toThrow(oneOrMoreArgNotNum);
		expect(() => {
			sum("hello", 1);
		}).toThrow(oneOrMoreArgNotNum);
		expect(() => {
			sum("hello", true, 1);
		}).toThrow(oneOrMoreArgNotNum);
	});
	test("should throw an error no arguments are passed", () => {
		expect(() => {
			sum();
		}).toThrow(noArgsPassed);
	});
	test("should sum one or more arguments", () => {
		expect(sum(1)).toBe(1);
		expect(sum(1, 2)).toBe(3);
		expect(sum(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)).toBe(15);
	});
});
