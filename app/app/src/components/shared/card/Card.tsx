import { forwardRef } from "react";
import { CardProps } from "../../../types/shared/card.types";

const BASE_CARD_CLASSES =
	"w-full p-6 sm:p-8 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700";

const Card = forwardRef<HTMLDivElement, CardProps>(
	({ className = "", children, ...rest }, ref) => {
		const cardClasses = `${BASE_CARD_CLASSES} ${className}`.trim();

		return (
			<div
				ref={ref}
				className={cardClasses}
				{...rest}>
				{children}
			</div>
		);
	}
);

Card.displayName = "Card";

export default Card;
