import { BoxProps } from "@mui/material";

export interface FormData {
	cartValue: number,
	deliveryDistance: number,
	numberOfItems: number,
	orderTime: Date
};

export type DeliveryFeeFormProps = Omit<BoxProps, "onSubmit"> & {
	onSubmit: (data: FormData, e?: React.BaseSyntheticEvent) => void | Promise<void>;
};