import React from "react";
import { CustomButtonProps } from "../types/button.types";

const CustomButton: React.FC<CustomButtonProps> = ({
	children,
	onClick,
	type = "button",
	disabled = false,
	variant = "purple",
	size = "md",
	className = "",
}) => {
	const getVariantClasses = () => {
		switch (variant) {
			case "purple":
				return "text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900";
			case "primary":
				return "text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
			case "secondary":
				return "text-gray-900 bg-gray-100 border border-gray-300 hover:bg-gray-200 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-700";
			default:
				return "text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900";
		}
	};

	const getSizeClasses = () => {
		switch (size) {
			case "sm":
				return "px-3 py-2 text-xs";
			case "md":
				return "px-5 py-2.5 text-sm";
			case "lg":
				return "px-6 py-3 text-base";
			default:
				return "px-5 py-2.5 text-sm";
		}
	};

	const baseClasses =
		"focus:outline-none font-medium rounded-lg focus:ring-4 mb-2 transition-colors duration-200";
	const variantClasses = getVariantClasses();
	const sizeClasses = getSizeClasses();
	const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

	const combinedClasses =
		`${baseClasses} ${variantClasses} ${sizeClasses} ${disabledClasses} ${className}`.trim();

	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={combinedClasses}>
			{children}
		</button>
	);
};

export default CustomButton;
