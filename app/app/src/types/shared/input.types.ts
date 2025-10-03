import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export interface FloatingLabelInputProps extends InputProps {
	label: string;
	containerClassName?: string;
}

export type FloatingLabelTextareaProps =
	TextareaHTMLAttributes<HTMLTextAreaElement> & {
		label: string;
		containerClassName?: string;
	};
