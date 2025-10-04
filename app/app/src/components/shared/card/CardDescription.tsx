import { CardDescriptionProps } from "../../../types/shared/card.types";

const BASE_CARD_DESCRIPTION_CLASSES = "text-base text-slate-300 sm:text-lg";

const CardDescription = ({
	className = "",
	children,
	...rest
}: CardDescriptionProps) => {
	const descriptionClasses =
		`${BASE_CARD_DESCRIPTION_CLASSES} ${className}`.trim();

	return (
		<p
			className={descriptionClasses}
			{...rest}>
			{children}
		</p>
	);
};

export default CardDescription;
