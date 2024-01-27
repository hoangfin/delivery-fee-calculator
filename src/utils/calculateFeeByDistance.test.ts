import { calculateFeeByDistance } from "./calculateFeeByDistance";

test("calculate fee when distance is 0", () => {
	expect(calculateFeeByDistance(0)).toBe(2);
});

test("calculate fee when distance is 1000", () => {
	expect(calculateFeeByDistance(1000)).toBe(2);
});

test("calculate fee when distance is 1499", () => {
	expect(calculateFeeByDistance(1499)).toBe(3);
});

test("calculate fee when distance is 1500", () => {
	expect(calculateFeeByDistance(1500)).toBe(3);
});

test("calculate fee when distance is 1501", () => {
	expect(calculateFeeByDistance(1501)).toBe(4);
});