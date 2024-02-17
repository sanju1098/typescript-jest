import React from "react";
import { ButtonProps, Button as MUIButton } from "@mui/material";

const Button = (props: ButtonProps) => {
	return <MUIButton {...props} />;
};

export default Button;
