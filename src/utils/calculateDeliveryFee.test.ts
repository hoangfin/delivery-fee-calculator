import { calculateDeliveryFee } from "./calculateDeliveryFee";
import type { FormData } from "@src/components/forms/DeliveryFeeForm";

const data: FormData = {
	cartValue: 10,
	deliveryDistance: 2222,
	numberOfItems: 4,
	orderTime: new Date()
};

test("calculate delivery fee when cart value = 8, numberOfItems = 4", () => {
	expect(calculateDeliveryFee(data)).toBe(2);
});

test("calculate delivery fee when cart value = 8, numberOfItems = 4", () => {
	expect(calculateDeliveryFee(data)).toBe(2);
});

test("calculate delivery fee when cart value = 8, numberOfItems = 4", () => {
	expect(calculateDeliveryFee(data)).toBe(2);
});

test("calculate delivery fee when cart value = 8, numberOfItems = 4", () => {
	expect(calculateDeliveryFee(data)).toBe(2);
});

test("calculate delivery fee when cart value = 8, numberOfItems = 4", () => {
	expect(calculateDeliveryFee(data)).toBe(2);
});

test("calculate delivery fee when cart value = 8, numberOfItems = 4", () => {
	expect(calculateDeliveryFee(data)).toBe(2);
});