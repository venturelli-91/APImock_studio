import { forwardRef } from "react";
import { ModalBodyProps } from "../../../types/shared/modal.types";

const BASE_BODY_CLASSES = "p-6 space-y-4";

const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
	({ className = "", ...rest }, ref) => {
		const bodyClasses = `${BASE_BODY_CLASSES} ${className}`.trim();

		return (
			<div
				ref={ref}
				className={bodyClasses}
				{...rest}
			/>
		);
	}
);

ModalBody.displayName = "ModalBody";

export default ModalBody;
