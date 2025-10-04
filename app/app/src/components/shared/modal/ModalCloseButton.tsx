import { forwardRef } from "react";
import { ModalCloseButtonProps } from "../../../types/shared/modal.types";

const BASE_CLOSE_BUTTON_CLASSES =
	"inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-white/20 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-transparent dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white";

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
