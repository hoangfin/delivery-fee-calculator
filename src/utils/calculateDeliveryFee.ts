
const MAX_FEE = 1500;
const BASE_DISTANCE_FEE: number = 200;

const calculateDistanceFee = (distance: number) => {
	let fee: number = BASE_DISTANCE_FEE;
	if (distance <= 1000) {
		return fee;
	}
	distance = distance - 1000;
	fee += Math.floor(distance / 500);
	fee += (distance > 500 && distance % 500 > 0) ? 1 : 0;
	return fee;
};

const calculateSurcharge = (cartValue: number, numberOfItems: number): number => {
	let surcharge: number = 0;
	if (cartValue < 1000) {
		surcharge = 1000 - cartValue;
	}
	if (numberOfItems > 4) {
		surcharge += (numberOfItems - 4) * 50;
	}
	return surcharge;
}

const isRushHour = (orderTime: Date): boolean => {
	return false;
}

export const calculateDeliveryFee = (
	cartValue: number,
	numberOfItems: number,
	distance: number,
	orderTime: Date
): number => {
	if (cartValue >= 20000) {
		return 0;
	}
	let deliveryFee: number = calculateDistanceFee(distance)
							+ calculateSurcharge(cartValue, numberOfItems);
	if (isRushHour(orderTime)) {
		deliveryFee *= 1.2;
	}
	if (deliveryFee >= MAX_FEE) {
		return MAX_FEE;
	}
	return deliveryFee;
};