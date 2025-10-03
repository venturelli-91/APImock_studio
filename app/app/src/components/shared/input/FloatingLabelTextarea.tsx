import { forwardRef } from "react";
import { FloatingLabelTextareaProps } from "../../../types/shared/input.types";

const BASE_TEXTAREA_CLASSES =
	"block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 dark:text-white dark:border-gray-600 dark:focus:border-blue-500";

const LABEL_CLASSES =
	"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";

const FloatingLabelTextarea = forwardRef<
	HTMLTextAreaElement,
	FloatingLabelTextareaProps
>(
	(
		{ id, label, containerClassName = "", className = "", rows = 4, ...rest },
		ref
	) => {
		const wrapperClasses =
			`relative z-0 w-full group ${containerClassName}`.trim();
		const textareaClasses =
			`peer resize-y ${BASE_TEXTAREA_CLASSES} ${className}`.trim();

		return (
			<div className={wrapperClasses}>
				<textarea
					ref={ref}
					id={id}
					rows={rows}
					className={textareaClasses}
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
	}
);

FloatingLabelTextarea.displayName = "FloatingLabelTextarea";

export default FloatingLabelTextarea;
