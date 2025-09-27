import React from "react";

export interface CustomButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
	variant?: "purple" | "primary" | "secondary";
	size?: "sm" | "md" | "lg";
	className?: string;
}

export type ButtonVariant = "purple" | "primary" | "secondary";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonType = "button" | "submit" | "reset";
