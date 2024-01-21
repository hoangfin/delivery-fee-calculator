import { Euro, LocalShippingOutlined, ShoppingBasketOutlined } from "@mui/icons-material";
import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";

export default function App() {
	return (
		<Container>
			<form>
				<Box display="inline-flex" alignItems="flex-end">
					<Euro sx={{ mr: 1, my: 0.5 }} />
					<TextField
						label="Cart Value"
						variant="standard"
						inputProps={{ "data-test-id": "cartValue" }}
					/>
				</Box>

				<Box display="inline-flex" alignItems="flex-end">
					<LocalShippingOutlined sx={{ mr: 1, my: 0.5 }} />
					<TextField
						label="Delivery distance (m)"
						variant="standard"
						inputProps={{ "data-test-id": "deliveryDistance" }}
					/>
				</Box>

				<Box display="inline-flex" alignItems="flex-end">
					<ShoppingBasketOutlined sx={{ mr: 1, my: 0.5 }} />
					<TextField
						label="Amount of items"
						variant="standard"
						inputProps={{ "data-test-id": "numberOfItems" }}
					/>
				</Box>

				<TextField
					type="datetime-local"
					label="Time"
					variant="standard"
					InputLabelProps={{ shrink: true }}
					inputProps={{ "data-test-id": "orderTime" }}
				/>

				<Button type="submit" variant="contained">
					Calculate delivery price
				</Button>
			</form>
			<Typography>
				Delivery cost:
				<Typography component="span" data-test-id="fee">2$</Typography>
			</Typography>
		</Container>
	);
}
