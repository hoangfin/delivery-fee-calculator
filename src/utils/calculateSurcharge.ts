export const calculateSurcharge = (cartValue: number, numberOfItems: number): number => {
	let surcharge: number = 0;
	if (cartValue < 10) {
		surcharge = 10 - cartValue;
	}
	if (numberOfItems > 4) {
		surcharge += (numberOfItems - 4) * 0.5;
	}
	if (numberOfItems > 12) {
		surcharge += 1.2;
	}
	return surcharge;
};
