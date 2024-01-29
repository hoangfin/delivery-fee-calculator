import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Euro, LocalShippingOutlined, ShoppingBasketOutlined } from "@mui/icons-material";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DeliveryFeeFormProps, FormData } from "./types";
import { schema } from "./schema";

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
		<Stack
			component="form"
			onSubmit={handleSubmit(submitHandler)}
			rowGap={2}
			{...rest}
		>
			<Typography component="h3" variant="h4" textAlign="center">
				Delivery Fee Calculator
			</Typography>
			<Box display="inline-flex" alignItems="flex-end">
				<Euro sx={{ mr: 1, my: 0.5 }} />
				<TextField
					fullWidth
					label="Cart Value"
					variant="standard"
					inputProps={{ "data-test-id": "cartValue" }}
					{...register("cartValue")}
					error={errors.cartValue ? true : false}
					helperText={errors.cartValue?.message}
				/>
			</Box>

			<Box display="inline-flex" alignItems="flex-end">
				<LocalShippingOutlined sx={{ mr: 1, my: 0.5 }} />
				<TextField
					fullWidth
					label="Delivery distance (m)"
					variant="standard"
					inputProps={{ "data-test-id": "deliveryDistance" }}
					{...register("deliveryDistance")}
					error={errors.deliveryDistance ? true : false}
					helperText={errors.deliveryDistance?.message}
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
					error={errors.numberOfItems ? true : false}
					helperText={errors.numberOfItems?.message}
				/>
			</Box>

			<TextField
				type="datetime-local"
				label="Time"
				variant="standard"
				InputLabelProps={{ shrink: true }}
				inputProps={{ "data-test-id": "orderTime" }}
				{...register("orderTime")}
				error={errors.orderTime ? true : false}
				helperText={errors.orderTime?.message}
			/>

			<Button type="submit" variant="contained">Calculate</Button>
		</Stack>
	);
};