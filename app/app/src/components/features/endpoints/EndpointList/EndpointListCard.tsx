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
}: EndpointListCardProps) => (
	<Card className="flex flex-col justify-between">
		<CardHeader className="space-y-2">
			<div className="flex items-center justify-between gap-3">
				<span
					className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${getMethodClasses(
						endpoint.httpMethod
					)}`}>
					{endpoint.httpMethod}
				</span>
				<span className="text-xs font-medium text-slate-300">
					Status {endpoint.statusCode}
				</span>
			</div>
			<CardTitle className="text-lg">{endpoint.name}</CardTitle>
			<CardDescription className="text-sm">
				{endpoint.description}
			</CardDescription>
		</CardHeader>
		<CardContent className="flex flex-col gap-3 text-left text-sm">
			<span className="font-medium text-slate-100">Path: {endpoint.path}</span>
			{typeof endpoint.responseDelayMs === "number" && (
				<span className="text-slate-300">
					Delay: {endpoint.responseDelayMs}ms
				</span>
			)}
		</CardContent>
		<CardActions className="mt-auto">
			<Button
				type="button"
				onClick={() => onEdit(endpoint)}
				className="w-full sm:w-auto">
				Edit
			</Button>
			<Button
				type="button"
				onClick={() => onDelete(endpoint)}
				className="w-full sm:w-auto bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 dark:bg-transparent dark:text-white dark:border-gray-600 dark:hover:bg-gray-700">
				Delete
			</Button>
		</CardActions>
	</Card>
);

export default EndpointListCard;
