const BASE_DISTANCE_FEE: number = 2;

export const calculateFeeByDistance = (distance: number) => {
	let fee: number = BASE_DISTANCE_FEE;
	if (distance <= 1000) {
		return fee;
	}
	distance = distance - 1000;
	fee += Math.floor(distance / 500);
	fee += (distance > 500 && distance % 500 > 0) ? 1 : 0;
	return fee;
};