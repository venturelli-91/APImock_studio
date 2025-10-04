import { Button } from "../../../shared/button";
import {
	Card,
	CardActions,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../../../shared/card";

interface EndpointCtaProps {
	onCreateEndpoint?: () => void;
	onViewDemo?: () => void;
}

const EndpointCta = ({ onCreateEndpoint, onViewDemo }: EndpointCtaProps) => (
	<Card className="text-center">
		<CardHeader>
			<CardTitle>Mock endpoints in minutes</CardTitle>
		</CardHeader>
		<CardContent className="space-y-5">
			<CardDescription>
				Spin up realistic REST responses with configurable methods, status
				codes, headers and payloads. Prototype faster while your backend is
				still in design.
			</CardDescription>
			<CardActions>
				<Button
					type="button"
					onClick={onCreateEndpoint}
					className="w-full sm:w-auto">
					Create endpoint
				</Button>
				<Button
					type="button"
					onClick={onViewDemo}
					className="w-full sm:w-auto bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 dark:bg-transparent dark:text-white dark:border-gray-600 dark:hover:bg-gray-700">
					View live example
				</Button>
			</CardActions>
		</CardContent>
	</Card>
);

export default EndpointCta;
