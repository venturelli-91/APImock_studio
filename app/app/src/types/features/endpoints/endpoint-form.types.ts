import { FormEventHandler } from "react";

export interface EndpointFormProps {
	onSubmit?: FormEventHandler<HTMLFormElement>;
	id?: string;
}
