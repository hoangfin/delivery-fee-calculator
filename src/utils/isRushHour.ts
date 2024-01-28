export const isRushHour = (orderTime: Date): boolean => {
	const day = orderTime.getDay();
	const hours = orderTime.getHours();
	const minutes = orderTime.getMinutes();
	const seconds = orderTime.getSeconds();
	const milliseconds = orderTime.getMilliseconds();
	if (day !== 5 || hours < 15 || hours > 19) {
		return false;
	}
	if (hours === 19 && (minutes !== 0 || seconds !== 0 || milliseconds !== 0))
		return false;
	return true;
}
