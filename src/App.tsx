import { useState } from "react";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
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
		<Paper
			square
			elevation={0}
			sx={{ height: "100%", background: '#00C2E8 no-repeat center/contain url("/yuho.webp")' }}
		>
			<Stack component={Container} minHeight="100%" justifyContent="center" alignItems="center">
				<Box
					width="clamp(300px, 100%, 500px)"
					marginX="auto"
					padding={2}
					boxSizing="border-box"
					borderRadius={2}
					bgcolor="rgba(255, 255, 255, 0.6)"
					border="1px solid rgba(255, 255, 255, 0.8)"
					sx={{ backdropFilter: "blur(8px)" }}
				>
					<DeliveryFeeForm onSubmit={handleSubmit} />
					<Stack component="p" direction="row" justifyContent="center" marginY={2}>
						<Typography component="span" variant="h4">Delivery cost</Typography>
						<Box component="span" display="inline-flex" color="rgb(15, 17, 17)" marginLeft={4}>
							<Typography component="span">€</Typography>
							<Typography component="span" fontSize="2.5rem" lineHeight="2.5rem">{whole}</Typography>
							<Typography component="span">{fraction}</Typography>
						</Box>
					</Stack>
				</Box>
			</Stack>
		</Paper>
	);
}
