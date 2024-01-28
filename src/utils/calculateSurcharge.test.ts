import { calculateSurcharge } from "./calculateSurcharge";

test("calculate surcharge when cart value = 8, numberOfItems = 4", () => {
	expect(calculateSurcharge(8, 4)).toBe(2);
});

test("calculate surcharge when cart value = 10, numberOfItems = 4", () => {
	expect(calculateSurcharge(10, 4)).toBe(0);
});

test("calculate surcharge when cart value = 10, numberOfItems = 5", () => {
	expect(calculateSurcharge(10, 5)).toBe(0.5);
});

test("calculate surcharge when cart value = 10, numberOfItems = 10", () => {
	expect(calculateSurcharge(10, 10)).toBe(3);
});

test("calculate surcharge when cart value = 10, numberOfItems = 13", () => {
	expect(calculateSurcharge(10, 13)).toBe(5.7);
});

test("calculate surcharge when cart value = 10, numberOfItems = 14", () => {
	expect(calculateSurcharge(10, 14)).toBe(6.2);
});