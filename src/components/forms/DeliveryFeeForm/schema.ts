import { z, ZodType } from "zod";
import { FormData } from "./types";

export const schema: ZodType<FormData> = z.object({
	cartValue: z.number({ invalid_type_error: "Expected number" })
				.gt(0, "Cart value must be bigger than 0"),
	deliveryDistance: z.number({
							required_error: "Delivery Distance is required",
							invalid_type_error: "Expected number"
						})
						.gt(0, "Delivery distance must be bigger than 0"),
	numberOfItems: z.number({
						required_error: "Number if Items are required",
						invalid_type_error: "Expected number"
					})
					.gt(0, "Number of items must be bigger than 0"),
	orderTime: z.coerce.date()
	// date({
	// 	required_error: "Order Time is required",
	// 	invalid_type_error: "Expected date"
	// })
});