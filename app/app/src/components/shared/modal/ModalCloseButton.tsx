import { forwardRef } from "react";
import { ModalCloseButtonProps } from "../../../types/shared/modal.types";

const BASE_CLOSE_BUTTON_CLASSES =
	"inline-flex h-10 w-10 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-offset-gray-900";

const ModalCloseButton = forwardRef<HTMLButtonElement, ModalCloseButtonProps>(
	({ className = "", type = "button", ...rest }, ref) => {
		const buttonClasses = `${BASE_CLOSE_BUTTON_CLASSES} ${className}`.trim();

		return (
			<button
				ref={ref}
				type={type}
				className={buttonClasses}
				{...rest}
			/>
		);
	}
);

ModalCloseButton.displayName = "ModalCloseButton";

export default ModalCloseButton;
