export const methodClassNames: Record<string, string> = {
	GET: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300",
	POST: "bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300",
	PUT: "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300",
	PATCH:
		"bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-300",
	DELETE: "bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300",
};

export const getMethodClasses = (method: string) =>
	methodClassNames[method.toUpperCase()] ??
	"bg-gray-100 text-gray-700 dark:bg-gray-500/10 dark:text-gray-300";

export const ENDPOINT_LIST_SKELETON_COUNT = 4;

export const ENDPOINT_LIST_LOAD_DELAY_MS = 600;
