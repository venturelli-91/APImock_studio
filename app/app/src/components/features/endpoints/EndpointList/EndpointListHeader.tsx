const EndpointListHeader = () => (
	<div className="flex flex-col gap-2">
		<h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
			Mocked endpoints
		</h2>
		<p className="text-sm text-gray-500 dark:text-gray-400">
			This is a static preview. Actions only toggle UI state and don&apos;t
			persist changes.
		</p>
	</div>
);

export default EndpointListHeader;
