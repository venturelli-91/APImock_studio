import Input from "./Input";
import { FloatingLabelInputProps } from "../../../types/shared/input.types";

const LABEL_CLASSES =
	"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";

const FloatingLabelInput = ({
	id,
	label,
	containerClassName = "",
	className = "",
	...rest
}: FloatingLabelInputProps) => {
	const wrapperClasses =
		`relative z-0 w-full group ${containerClassName}`.trim();
	const inputClasses = `peer ${className}`.trim();

	return (
		<div className={wrapperClasses}>
			<Input
				id={id}
				className={inputClasses}
				placeholder=" "
				{...rest}
			/>
			<label
				htmlFor={id}
				className={LABEL_CLASSES}>
				{label}
			</label>
		</div>
	);
};

export default FloatingLabelInput;
