import { CardHeaderProps } from "../../../types/shared/card.types";

const BASE_CARD_HEADER_CLASSES = "flex flex-col items-center text-center gap-3";

const CardHeader = ({ className = "", children, ...rest }: CardHeaderProps) => {
	const headerClasses = `${BASE_CARD_HEADER_CLASSES} ${className}`.trim();

	return (
		<div
			className={headerClasses}
			{...rest}>
			{children}
		</div>
	);
};

export default CardHeader;
