import type { EndpointCollection } from "../types/features/collection/endpoint-collection.types";

export const mockCollections: EndpointCollection[] = [
	{
		id: "collection-core",
		name: "Core API",
		updatedAtIso: "2025-09-10T14:20:00Z",
		items: [
			{
				id: "collection-core-get-users",
				endpointId: "1",
				name: "List users",
				httpMethod: "GET",
				path: "/api/users",
				description: "Retrieve the full user directory",
			},
			{
				id: "collection-core-create-mock",
				endpointId: "2",
				name: "Create mock",
				httpMethod: "POST",
				path: "/api/mocks",
				description: "Create a new mock definition",
			},
		],
	},
	{
		id: "collection-maintenance",
		name: "Maintenance",
		updatedAtIso: "2025-09-08T09:45:00Z",
		items: [
			{
				id: "collection-maintenance-delete-mock",
				endpointId: "3",
				name: "Delete mock",
				httpMethod: "DELETE",
				path: "/api/mocks/:id",
				description: "Remove an existing mock",
			},
		],
	},
];
