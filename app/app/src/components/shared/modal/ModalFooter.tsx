import { forwardRef } from "react";
import { ModalFooterProps } from "../../../types/shared/modal.types";

const BASE_FOOTER_CLASSES =
	"flex flex-col-reverse gap-3 rounded-b-2xl border-t border-white/15 p-6 sm:flex-row sm:justify-end sm:gap-4 dark:border-white/10";

const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
	({ className = "", ...rest }, ref) => {
		const footerClasses = `${BASE_FOOTER_CLASSES} ${className}`.trim();

		return (
			<div
				ref={ref}
				className={footerClasses}
				{...rest}
			/>
		);
	}
);

ModalFooter.displayName = "ModalFooter";

export default ModalFooter;
