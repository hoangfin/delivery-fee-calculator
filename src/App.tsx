import { Container, Stack, Typography } from "@mui/material";
import DeliveryFeeForm, { Inputs } from "@src/components/forms/DeliveryFeeForm";
import { FormEventHandler, useState } from "react";
import { calculateDeliveryFee } from "@src/utils";
import { SubmitHandler } from "react-hook-form";

export default function App() {
	const [fee, setFee] = useState<number>(0);

	const handleSubmit: SubmitHandler<Inputs> = (data, e) => {
		e?.preventDefault();
		setFee(calculateDeliveryFee(
			data.cartValue,
			data.numberOfItems,
			data.deliveryDistance,
			data.orderTime
		));
		console.log(data);
	}

	return (
		<Stack component={Container} minHeight="100%" justifyContent="center" alignItems="center">
			<DeliveryFeeForm
				width="clamp(350px, 100%, 500px)"
				marginX="auto"
				abc={handleSubmit}
			/>
			<Typography>
				Delivery cost:
				<Typography component="span" data-test-id="fee">{fee}$</Typography>
			</Typography>
		</Stack>
	);
}
