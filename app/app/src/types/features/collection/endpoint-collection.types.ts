import type { EndpointListItem } from "../endpoints/endpoint-list.types";

export interface EndpointCollectionItem {
	id: string;
	endpointId: EndpointListItem["id"];
	name: string;
	httpMethod: EndpointListItem["httpMethod"];
	path: EndpointListItem["path"];
	description?: string;
}

export interface EndpointCollection {
	id: string;
	name: string;
	folder?: string;
	updatedAtIso?: string;
	items: EndpointCollectionItem[];
}
