import { Box, BoxProps, Button, Stack, TextField } from "@mui/material";
import { Euro, LocalShippingOutlined, ShoppingBasketOutlined } from "@mui/icons-material";
import { useForm, SubmitHandler } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export interface FormData {
	cartValue: number,
	deliveryDistance: number,
	numberOfItems: number,
	orderTime: Date
};

const schema: ZodType<FormData> = z.object({
	cartValue: z.number().gt(0, "Cart value must be bigger than 0"),
	deliveryDistance: z.number(),
	numberOfItems: z.number(),
	orderTime: z.date()
});

type DeliveryFeeFormProps = Omit<BoxProps, "onSubmit"> & {
	onSubmit: (data: FormData, e?: React.BaseSyntheticEvent) => void | Promise<void>;
};

export function DeliveryFeeForm(props: DeliveryFeeFormProps) {
	const { onSubmit, ...rest } = props;
	const {
		register,
		handleSubmit,
		formState: {errors}
	} = useForm<FormData>({ resolver: zodResolver(schema) });

	const submitHandler: SubmitHandler<FormData> = (data, e) => {
		onSubmit(data, e);
	};

	return (
		<Stack component="form" onSubmit={handleSubmit(submitHandler)} rowGap={2} {...rest}>
			<Box display="inline-flex" alignItems="flex-end">
				<Euro sx={{ mr: 1, my: 0.5 }} />
				<TextField
					fullWidth
					label="Cart Value"
					variant="standard"
					inputProps={{ "data-test-id": "cartValue" }}
					{...register("cartValue", { valueAsNumber: true })}
				/>
			</Box>
			{errors.cartValue && <span>{errors.cartValue.message}</span>}

			<Box display="inline-flex" alignItems="flex-end">
				<LocalShippingOutlined sx={{ mr: 1, my: 0.5 }} />
				<TextField
					fullWidth
					label="Delivery distance (m)"
					variant="standard"
					inputProps={{ "data-test-id": "deliveryDistance" }}
					{...register("deliveryDistance")}
				/>
			</Box>

			<Box display="inline-flex" alignItems="flex-end">
				<ShoppingBasketOutlined sx={{ mr: 1, my: 0.5 }} />
				<TextField
					fullWidth
					label="Amount of items"
					variant="standard"
					inputProps={{ "data-test-id": "numberOfItems" }}
					{...register("numberOfItems")}
				/>
			</Box>

			<TextField
				type="datetime-local"
				label="Time"
				variant="standard"
				InputLabelProps={{ shrink: true }}
				inputProps={{ "data-test-id": "orderTime" }}
				{...register("orderTime")}
			/>

			<Button type="submit" variant="contained">
				Calculate delivery price
			</Button>
		</Stack>
	);
};