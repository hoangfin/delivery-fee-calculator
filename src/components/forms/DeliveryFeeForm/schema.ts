import { z, ZodType } from "zod";
import { FormData } from "./types";

export const schema: ZodType<FormData> = z.object({
	cartValue: z.preprocess(
		value => value === "" ? undefined : Number(value),
		z.number({ invalid_type_error: "Number expected" })
		 .gt(0, "Cart value must be greater than 0")
	) as z.ZodEffects<z.ZodNumber, number, number>,

	deliveryDistance: z.preprocess(
		value => value === "" ? undefined : Number(value),
		z.number({ invalid_type_error: "Number expected" })
		 .gt(0, "Delivery distance must be greater than 0")
	) as z.ZodEffects<z.ZodNumber, number, number>,

	numberOfItems: z.preprocess(
		value => value === "" ? undefined : Number(value),
		z.number({ invalid_type_error: "Number expected" })
		 .int("Integer is required")
		 .gt(0, "Number of items must be greater than 0")
	) as z.ZodEffects<z.ZodNumber, number, number>,

	orderTime: z.coerce.date()
});