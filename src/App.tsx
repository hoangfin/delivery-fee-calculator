import { useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { DeliveryFeeForm, FormData } from "@src/components/forms/DeliveryFeeForm";
import { calculateDeliveryFee } from "@src/utils";

export default function App() {
	const [fee, setFee] = useState<number>(0);
	const [whole, fraction] = fee.toFixed(2).split(".");

	const handleSubmit = (data: FormData, e?: React.BaseSyntheticEvent) => {
		e?.preventDefault();
		setFee(calculateDeliveryFee(data));
	}

	return (
		<Stack component={Container} minHeight="100%" justifyContent="center" alignItems="center">
			<DeliveryFeeForm
				width="clamp(300px, 100%, 500px)"
				boxSizing="border-box"
				marginX="auto"
				onSubmit={handleSubmit}
			/>

			<Stack component="p" direction="row" marginY={2}>
				<Typography variant="h4">Delivery cost</Typography>
				<Box component="span" display="inline-flex" color="rgb(15, 17, 17)" marginLeft={4}>
					<Typography component="span">€</Typography>
					<Typography component="span" fontSize="2.5rem" lineHeight="2.5rem" overflow="hidden">{whole}</Typography>
					<Typography component="span">{fraction}</Typography>
				</Box>
			</Stack>
		</Stack>
	);
}
