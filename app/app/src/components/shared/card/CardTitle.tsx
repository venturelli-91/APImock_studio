import { CardTitleProps } from "../../../types/shared/card.types";

const BASE_CARD_TITLE_CLASSES = "text-3xl font-bold text-slate-100";

const CardTitle = ({ className = "", children, ...rest }: CardTitleProps) => {
	const titleClasses = `${BASE_CARD_TITLE_CLASSES} ${className}`.trim();

	return (
		<h2
			className={titleClasses}
			{...rest}>
			{children}
		</h2>
	);
};

export default CardTitle;
