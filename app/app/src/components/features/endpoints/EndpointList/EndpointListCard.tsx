import { Button } from "../../../shared/button";
import {
	Card,
	CardActions,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../../../shared/card";
import { getMethodClasses } from "./endpoint-list.constants";
import type { EndpointListCardProps } from "../../../../types/features/endpoints/endpoint-list-components.types";

const EndpointListCard = ({
	endpoint,
	onEdit,
	onDelete,
	onSelect,
	isActive = false,
}: EndpointListCardProps) => {
	const handleCardClick = () => {
		onSelect?.(endpoint);
	};

	const cardClasses = [
		"flex w-full flex-col justify-between border border-white/10 transition-all max-w-md p-4 sm:p-5 min-h-[18rem]",
		isActive
			? "ring-2 ring-cyan-400/80 shadow-xl"
			: "hover:border-cyan-400/60 hover:shadow-lg",
	].join(" ");

	return (
		<Card
			onClick={handleCardClick}
			role="button"
			tabIndex={0}
			className={cardClasses}>
			<CardHeader className="space-y-1">
				<div className="flex items-center justify-between gap-3">
					<span
						className={`inline-flex items-center rounded-full px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide ${getMethodClasses(
							endpoint.httpMethod
						)}`}>
						{endpoint.httpMethod}
					</span>
					<span className="text-[0.7rem] font-medium text-slate-300">
						Status {endpoint.statusCode}
					</span>
				</div>
				<CardTitle className="text-base font-semibold">
					{endpoint.name}
				</CardTitle>
				<CardDescription className="text-xs text-slate-400">
					{endpoint.description}
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-2 text-left text-xs sm:text-sm">
				<span className="font-medium text-slate-100">
					Path: {endpoint.path}
				</span>
				{typeof endpoint.responseDelayMs === "number" && (
					<span className="text-slate-300">
						Delay: {endpoint.responseDelayMs}ms
					</span>
				)}
			</CardContent>
			<CardActions className="mt-auto gap-3 sm:gap-2">
				<Button
					type="button"
					onClick={(event) => {
						event.stopPropagation();
						onEdit(endpoint);
					}}
					className="w-full sm:w-auto text-sm py-2">
					Edit
				</Button>
				<Button
					type="button"
					onClick={(event) => {
						event.stopPropagation();
						onDelete(endpoint);
					}}
					className="w-full sm:w-auto bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 dark:bg-transparent dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 text-sm py-2">
					Delete
				</Button>
			</CardActions>
		</Card>
	);
};

export default EndpointListCard;
