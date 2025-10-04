import { forwardRef } from "react";
import { CardProps } from "../../../types/shared/card.types";

const BASE_CARD_CLASSES =
	"w-full rounded-xl border border-white/10 bg-slate-950/50 p-6 text-slate-100 shadow-lg backdrop-blur-xl transition-colors sm:p-8 dark:border-white/5 dark:bg-slate-950/40 dark:text-slate-100";

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
