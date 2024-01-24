import { Box, BoxProps, Button, Stack, TextField } from "@mui/material";
import { Euro, LocalShippingOutlined, ShoppingBasketOutlined } from "@mui/icons-material";
import { useForm, SubmitHandler } from "react-hook-form";

export interface Inputs {
	cartValue: number,
	deliveryDistance: number,
	numberOfItems: number,
	orderTime: Date
};

type DeliveryFeeFormProps = BoxProps & {
	abc: SubmitHandler<Inputs>;
	// onSubmit: SubmitHandler<Inputs>;
};

export default function DeliveryFeeForm(props: DeliveryFeeFormProps) {
	const { abc, ...rest } = props;
	const {
		register,
		handleSubmit
	} = useForm<Inputs>();

	return (
		<Stack component="form" onSubmit={handleSubmit(abc)} rowGap={2} {...rest}>
			<Box display="inline-flex" alignItems="flex-end">
				<Euro sx={{ mr: 1, my: 0.5 }} />
				<TextField
					fullWidth
					label="Cart Value"
					variant="standard"
					inputProps={{ "data-test-id": "cartValue" }}
					{...register("cartValue")}
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