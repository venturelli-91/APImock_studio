export interface EndpointListItem {
	id: string;
	name: string;
	httpMethod: string;
	path: string;
	statusCode: number;
	responseDelayMs?: number;
	description?: string;
}
