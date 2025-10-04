import { forwardRef } from "react";
import { ModalTitleProps } from "../../../types/shared/modal.types";

const BASE_TITLE_CLASSES =
	"text-lg font-semibold text-gray-900 dark:text-white";

const ModalTitle = forwardRef<HTMLHeadingElement, ModalTitleProps>(
	({ className = "", ...rest }, ref) => {
		const titleClasses = `${BASE_TITLE_CLASSES} ${className}`.trim();

		return (
			<h3
				ref={ref}
				className={titleClasses}
				{...rest}
			/>
		);
	}
);

ModalTitle.displayName = "ModalTitle";

export default ModalTitle;
