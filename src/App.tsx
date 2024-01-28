import { useState } from "react";
import { Container, Stack, Typography } from "@mui/material";
import { DeliveryFeeForm, FormData } from "@src/components/forms/DeliveryFeeForm";
import { calculateDeliveryFee } from "@src/utils";

export default function App() {
	const [fee, setFee] = useState<number>(0);

	const handleSubmit = (data: FormData, e?: React.BaseSyntheticEvent) => {
		e?.preventDefault();
		// console.log(calculateDeliveryFee(data));
		setFee(calculateDeliveryFee(data));
		console.log(data);
	}

	return (
		<Stack component={Container} minHeight="100%" justifyContent="center" alignItems="center">
			<DeliveryFeeForm
				width="clamp(300px, 100%, 500px)"
				boxSizing="border-box"
				marginX="auto"
				onSubmit={handleSubmit}
			/>
			<Typography>
				Delivery cost:
				<Typography component="span" data-test-id="fee">{fee}$</Typography>
			</Typography>
		</Stack>
	);
}
