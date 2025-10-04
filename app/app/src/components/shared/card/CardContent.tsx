import { CardContentProps } from "../../../types/shared/card.types";

const BASE_CARD_CONTENT_CLASSES = "text-center space-y-4";

const CardContent = ({
	className = "",
	children,
	...rest
}: CardContentProps) => {
	const contentClasses = `${BASE_CARD_CONTENT_CLASSES} ${className}`.trim();

	return (
		<div
			className={contentClasses}
			{...rest}>
			{children}
		</div>
	);
};

export default CardContent;
