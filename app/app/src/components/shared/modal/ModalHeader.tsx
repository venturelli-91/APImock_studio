import { forwardRef } from "react";
import { ModalHeaderProps } from "../../../types/shared/modal.types";

const BASE_HEADER_CLASSES =
	"flex items-start justify-between gap-4 rounded-t-lg border-b border-gray-100 p-6 dark:border-gray-700";

const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
	({ className = "", ...rest }, ref) => {
		const headerClasses = `${BASE_HEADER_CLASSES} ${className}`.trim();

		return (
			<div
				ref={ref}
				className={headerClasses}
				{...rest}
			/>
		);
	}
);

ModalHeader.displayName = "ModalHeader";

export default ModalHeader;
