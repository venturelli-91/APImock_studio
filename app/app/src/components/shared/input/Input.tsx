import { forwardRef } from "react";
import { InputProps } from "../../../types/shared/input.types";

const BASE_INPUT_CLASSES =
	"block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 dark:text-white dark:border-gray-600 dark:focus:border-blue-500";

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className = "", ...rest }, ref) => {
		const inputClasses = `${BASE_INPUT_CLASSES} ${className}`.trim();

		return (
			<input
				ref={ref}
				className={inputClasses}
				{...rest}
			/>
		);
	}
);

Input.displayName = "Input";

export default Input;
