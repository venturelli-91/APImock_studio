import { CardActionsProps } from "../../../types/shared/card.types";

const BASE_CARD_ACTIONS_CLASSES =
	"flex flex-col items-center justify-center gap-4 sm:flex-row";

const CardActions = ({
	className = "",
	children,
	...rest
}: CardActionsProps) => {
	const actionsClasses = `${BASE_CARD_ACTIONS_CLASSES} ${className}`.trim();

	return (
		<div
			className={actionsClasses}
			{...rest}>
			{children}
		</div>
	);
};

export default CardActions;
