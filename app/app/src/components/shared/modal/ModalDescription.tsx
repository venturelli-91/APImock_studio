import { forwardRef } from "react";
import { ModalDescriptionProps } from "../../../types/shared/modal.types";

const BASE_DESCRIPTION_CLASSES = "text-sm text-gray-500 dark:text-gray-400";

const ModalDescription = forwardRef<
	HTMLParagraphElement,
	ModalDescriptionProps
>(({ className = "", ...rest }, ref) => {
	const descriptionClasses = `${BASE_DESCRIPTION_CLASSES} ${className}`.trim();

	return (
		<p
			ref={ref}
			className={descriptionClasses}
			{...rest}
		/>
	);
});

ModalDescription.displayName = "ModalDescription";

export default ModalDescription;
