
const MAX_FEE = 15;
const BASE_DISTANCE_FEE: number = 2;

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
	if (cartValue < 10) {
		surcharge = 10 - cartValue;
	}
	if (numberOfItems > 4) {
		surcharge += (numberOfItems - 4) * 0.5;
	}
	return surcharge;
}

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
	let deliveryFee: number = calculateDistanceFee(deliveryDistance)
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