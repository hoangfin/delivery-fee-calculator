import { Euro, LocalShippingOutlined, ShoppingBasketOutlined } from "@mui/icons-material";
import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { calculateDeliveryFee } from "@src/utils";

type Input = {
	cartValue: number,
	deliveryDistance: number,
	numberOfItems: number,
	orderTime: Date
};

export default function App() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<Input>();
	const handleSubmission: SubmitHandler<Input> = (data) => console.log(data);

	return (
		<Container
			sx={{
				minHeight: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center"
			}}
		>
			<Stack
				component="form"
				width="clamp(350px, 100%, 500px)"
				marginX="auto"
				rowGap={2}
				noValidate
				onSubmit={handleSubmit(handleSubmission)}
			>
				<Box display="inline-flex" alignItems="flex-end">
					<Euro sx={{ mr: 1, my: 0.5 }} />
					<TextField
						fullWidth
						label="Cart Value"
						variant="standard"
						inputProps={{ "data-test-id": "cartValue" }}
						{...register("cartValue", { required: true, valueAsNumber: true })}
					/>
				</Box>

				<Box display="inline-flex" alignItems="flex-end">
					<LocalShippingOutlined sx={{ mr: 1, my: 0.5 }} />
					<TextField
						fullWidth
						label="Delivery distance (m)"
						variant="standard"
						inputProps={{ "data-test-id": "deliveryDistance" }}
						{...register("deliveryDistance", { required: true, valueAsNumber: true })}
					/>
				</Box>

				<Box display="inline-flex" alignItems="flex-end">
					<ShoppingBasketOutlined sx={{ mr: 1, my: 0.5 }} />
					<TextField
						fullWidth
						label="Amount of items"
						variant="standard"
						inputProps={{ "data-test-id": "numberOfItems" }}
						{...register("numberOfItems", { required: true, valueAsNumber: true })}
					/>
				</Box>

				<TextField
					type="datetime-local"
					label="Time"
					variant="standard"
					InputLabelProps={{ shrink: true }}
					inputProps={{ "data-test-id": "orderTime" }}
					{...register("orderTime", { required: true, valueAsDate: true })}
				/>

				<Button type="submit" variant="contained">
					Calculate delivery price
				</Button>
				{/* <Typography>{errors}</Typography> */}
				<Typography>
					Delivery cost:
					<Typography component="span" data-test-id="fee">2$</Typography>
				</Typography>
			</Stack>
		</Container>
	);
}
