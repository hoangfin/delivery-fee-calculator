import { object, number, date } from "yup";

export const schema = object().shape({
	cartValue: number()
				.required("Cart value is required")
				.moreThan(0, "Cart value must be bigger than 0"),
	deliveryDistance: number()
						.required("Delivery distance is required")
						.moreThan(0, "Delivery distance must be bigger than 0"),
	numberOfItems: number()
					.required("Number of items are required")
					.moreThan(0, "Number of items must be bigger than 0"),
	orderTime: date().required()
});