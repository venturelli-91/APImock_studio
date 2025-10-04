import { CardDescriptionProps } from "../../../types/shared/card.types";

const BASE_CARD_DESCRIPTION_CLASSES =
	"text-base text-gray-500 sm:text-lg dark:text-gray-400";

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
