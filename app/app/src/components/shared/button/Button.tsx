import { ButtonProps } from "../../../types/shared/button.types";

const BASE_BUTTON_CLASSES =
	"text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700";

const Button = ({
	children,
	className = "",
	type = "button",
	...rest
}: ButtonProps) => {
	const buttonClasses = `${BASE_BUTTON_CLASSES} ${className}`.trim();

	return (
		<button
			type={type}
			className={buttonClasses}
			{...rest}>
			{children}
		</button>
	);
};

export default Button;
