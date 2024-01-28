import { calculateFeeByDistance } from "./calculateFeeByDistance";
import { calculateSurcharge } from "./calculateSurcharge";
import { isRushHour } from "./isRushHour";

const MAX_DELIVERY_FEE = 15;

export const calculateDeliveryFee = ({ cartValue, numberOfItems, deliveryDistance, orderTime }: {
	cartValue: number,
	numberOfItems: number,
	deliveryDistance: number,
	orderTime: Date
}): number => {
	if (cartValue >= 200) {
		return 0;
	}
	let deliveryFee: number = calculateFeeByDistance(deliveryDistance)
							+ calculateSurcharge(cartValue, numberOfItems);
	if (isRushHour(orderTime)) {
		deliveryFee *= 1.2;
	}
	if (deliveryFee >= MAX_DELIVERY_FEE) {
		return MAX_DELIVERY_FEE;
	}
	return deliveryFee;
};