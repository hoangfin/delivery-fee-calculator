import { calculateDeliveryFee } from "./calculateDeliveryFee";

test("cartValue = 10, deliveryDistance = 1000, numberOfItems = 4, orderTime = Mon Jan 22 2024 15:30:00", () => {
	expect(calculateDeliveryFee({
		cartValue: 10,
		deliveryDistance: 1000,
		numberOfItems: 4,
		orderTime: new Date(2024, 0, 22, 15, 30, 0, 0)
	})).toBe(2);
});

test("cartValue = 200, deliveryDistance = 1000, numberOfItems = 4, orderTime = Mon Jan 22 2024 15:30:00", () => {
	expect(calculateDeliveryFee({
		cartValue: 200,
		deliveryDistance: 1000,
		numberOfItems: 4,
		orderTime: new Date(2024, 0, 22, 15, 30, 0, 0)
	})).toBe(0);
});

test("cartValue = 50, deliveryDistance = 1501, numberOfItems = 4, orderTime = Mon Fri 26 2024 15:30:00", () => {
	expect(calculateDeliveryFee({
		cartValue: 50,
		deliveryDistance: 1501,
		numberOfItems: 4,
		orderTime: new Date(2024, 0, 26, 15, 30, 0, 0)
	})).toBe(4.8);
});

test("cartValue = 50, deliveryDistance = 4001, numberOfItems = 13, orderTime = Mon Thu 25 2024 15:30:00", () => {
	expect(calculateDeliveryFee({
		cartValue: 50,
		deliveryDistance: 4001,
		numberOfItems: 13,
		orderTime: new Date(2024, 0, 25, 15, 30, 0, 0)
	})).toBe(14.7);
});
