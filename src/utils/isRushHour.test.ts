import { isRushHour } from "./isRushHour";

test("Check rush hours for Friday Jan 26 2024 14:59:00 ", () => {
	const date = new Date(2024, 0, 26, 14, 59, 0, 0);
	expect(isRushHour(date)).toBeFalsy();
});

test("Check rush hours for Friday Jan 26 2024 15:00:00 ", () => {
	const date = new Date(2024, 0, 26, 15, 0, 0, 0);
	expect(isRushHour(date)).toBeTruthy();
});

test("Check rush hours for Friday Jan 26 2024 19:00:00 ", () => {
	const date = new Date(2024, 0, 26, 19, 0, 0, 0);
	expect(isRushHour(date)).toBeTruthy();
});

test("Check rush hours for Friday Jan 26 2024 19:01:00 ", () => {
	const date = new Date(2024, 0, 26, 19, 1, 0, 0);
	expect(isRushHour(date)).toBeFalsy();
});