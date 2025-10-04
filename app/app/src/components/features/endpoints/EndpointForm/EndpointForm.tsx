import {
	FloatingLabelInput,
	FloatingLabelTextarea,
} from "../../../shared/input";
import { EndpointFormProps } from "../../../../types/features/endpoints/endpoint-form.types";

const EndpointForm = ({ onSubmit, id }: EndpointFormProps) => (
	<form
		onSubmit={onSubmit}
		id={id}
		className="space-y-6">
		<div className="grid gap-6 md:grid-cols-2">
			<FloatingLabelInput
				id="endpoint_name"
				name="endpointName"
				type="text"
				label="Endpoint name"
				required
				containerClassName="mb-5"
			/>
			<FloatingLabelInput
				id="endpoint_path"
				name="endpointPath"
				type="text"
				label="Endpoint path"
				required
				containerClassName="mb-5"
			/>
		</div>

		<div className="grid gap-6 md:grid-cols-2">
			<FloatingLabelInput
				id="http_method"
				name="httpMethod"
				type="text"
				label="HTTP method"
				required
				containerClassName="mb-5"
			/>
			<FloatingLabelInput
				id="status_code"
				name="statusCode"
				type="number"
				label="Status code"
				required
				containerClassName="mb-5"
				min={100}
				max={599}
			/>
		</div>

		<FloatingLabelTextarea
			id="endpoint_description"
			name="description"
			label="Description (optional)"
			containerClassName="mb-5"
			rows={4}
		/>

		<div className="grid gap-6 md:grid-cols-[2fr_1fr]">
			<FloatingLabelTextarea
				id="response_headers"
				name="headers"
				label="Response headers (JSON)"
				containerClassName="mb-5"
				rows={4}
			/>

			<FloatingLabelInput
				id="response_delay"
				name="delay"
				type="number"
				label="Response delay (ms)"
				containerClassName="mb-5"
				min={0}
			/>
		</div>

		<FloatingLabelTextarea
			id="json_response"
			name="responseBody"
			label="JSON response"
			containerClassName="mb-5"
			rows={8}
			required
		/>
	</form>
);

export default EndpointForm;
