import { z, ZodType } from "zod";
import { FormData } from "./types";

export const schema: ZodType<FormData> = z.object({
	cartValue: z.number().superRefine((number, ctx) => {
		if (typeof number === "string" && number === "") {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "cart value is required",
				fatal: true
			});
			return z.NEVER;
		}
		if (number <= 0) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "cart value must be greater than 0",
				fatal: true
			});
			return z.NEVER;
		}
	}),
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