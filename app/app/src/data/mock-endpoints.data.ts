import type { EndpointListItem } from "../types/features/endpoints/endpoint-list.types";

export const mockEndpointList: EndpointListItem[] = [
	{
		id: "1",
		name: "List users",
		httpMethod: "GET",
		path: "/api/users",
		statusCode: 200,
		responseDelayMs: 120,
		description: "Returns the registered users",
		collectionId: "collection-core",
	},
	{
		id: "2",
		name: "Create mock",
		httpMethod: "POST",
		path: "/api/mocks",
		statusCode: 201,
		description: "Creates a mocked endpoint definition",
		collectionId: "collection-core",
	},
	{
		id: "3",
		name: "Delete mock",
		httpMethod: "DELETE",
		path: "/api/mocks/:id",
		statusCode: 204,
		description: "Removes a mocked endpoint",
		collectionId: "collection-maintenance",
	},
];
