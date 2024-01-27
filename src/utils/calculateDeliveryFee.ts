import { calculateFeeByDistance } from "./calculateFeeByDistance";
import { calculateSurcharge } from "./calculateSurcharge";

const MAX_FEE = 15;

const isRushHour = (orderTime: Date): boolean => {
	console.log(new Date(orderTime).toISOString());
	return false;
}

export const calculateDeliveryFee = ({ cartValue, numberOfItems, deliveryDistance, orderTime }: {
	cartValue: number,
	numberOfItems: number,
	deliveryDistance: number,
	orderTime: Date
}): number => {
	console.log(`${orderTime}`);
	if (cartValue >= 200) {
		return 0;
	}
	let deliveryFee: number = calculateFeeByDistance(deliveryDistance)
							+ calculateSurcharge(cartValue, numberOfItems);
	if (isRushHour(orderTime)) {
		deliveryFee *= 1.2;
	}
	console.log("deliveryFee == " + deliveryFee);
	if (deliveryFee >= MAX_FEE) {
		return MAX_FEE;
	}
	return deliveryFee;
};