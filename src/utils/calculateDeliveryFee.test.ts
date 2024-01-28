import { calculateDeliveryFee } from "./calculateDeliveryFee";
import type { FormData } from "@src/components/forms/DeliveryFeeForm";

const data: FormData = {
	cartValue: 10,
	deliveryDistance: 1000,
	numberOfItems: 4,
	orderTime: new Date(2024, 0, 22, 15, 30, 0, 0)
};

test("calculate delivery fee when cartValue = 10, deliveryDistance = 1000, numberOfItems = 4, orderTime = Friday Jan 22 2024 15:30:00", () => {
	expect(calculateDeliveryFee(data)).toBe(2);
});

// test("calculate delivery fee when cart value = 8, numberOfItems = 4", () => {
// 	expect(calculateDeliveryFee(data)).toBe(2);
// });

// test("calculate delivery fee when cart value = 8, numberOfItems = 4", () => {
// 	expect(calculateDeliveryFee(data)).toBe(2);
// });

// test("calculate delivery fee when cart value = 8, numberOfItems = 4", () => {
// 	expect(calculateDeliveryFee(data)).toBe(2);
// });

// test("calculate delivery fee when cart value = 8, numberOfItems = 4", () => {
// 	expect(calculateDeliveryFee(data)).toBe(2);
// });

// test("calculate delivery fee when cart value = 8, numberOfItems = 4", () => {
// 	expect(calculateDeliveryFee(data)).toBe(2);
// });