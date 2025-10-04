import { Card, CardContent, CardHeader } from "../../../shared/card";
import type { EndpointListSkeletonProps } from "../../../../types/features/endpoints/endpoint-list-components.types";

const baseSkeletonClasses =
	"animate-pulse rounded-md bg-slate-200/80 dark:bg-slate-700/60";

const EndpointListSkeleton = ({ count = 1 }: EndpointListSkeletonProps) => (
	<>
		{Array.from({ length: count }).map((_, index) => (
			<Card
				key={`endpoint-skeleton-${index}`}
				className="flex flex-col justify-between border-dashed border-slate-200 dark:border-slate-700">
				<CardHeader className="space-y-3">
					<div className="flex items-center justify-between gap-3">
						<span className={`h-6 w-16 ${baseSkeletonClasses}`} />
						<span className={`h-4 w-20 ${baseSkeletonClasses}`} />
					</div>
					<span className={`h-6 w-40 ${baseSkeletonClasses}`} />
					<span className={`h-4 w-56 ${baseSkeletonClasses}`} />
				</CardHeader>
				<CardContent className="flex flex-col gap-3">
					<span className={`h-4 w-48 ${baseSkeletonClasses}`} />
					<span className={`h-4 w-36 ${baseSkeletonClasses}`} />
					<span className={`h-4 w-24 ${baseSkeletonClasses}`} />
				</CardContent>
			</Card>
		))}
	</>
);

export default EndpointListSkeleton;
