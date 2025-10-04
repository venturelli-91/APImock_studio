import { forwardRef } from "react";
import { ModalHeaderProps } from "../../../types/shared/modal.types";

const BASE_HEADER_CLASSES =
	"flex items-start justify-between gap-4 rounded-t-2xl border-b border-white/15 p-6 dark:border-white/10";

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
