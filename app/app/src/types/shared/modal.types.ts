import { ButtonHTMLAttributes, HTMLAttributes } from "react";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
	isOpen: boolean;
	onClose?: () => void;
	closeOnOverlayClick?: boolean;
	overlayClassName?: string;
	containerClassName?: string;
}

export type ModalHeaderProps = HTMLAttributes<HTMLDivElement>;
export type ModalBodyProps = HTMLAttributes<HTMLDivElement>;
export type ModalFooterProps = HTMLAttributes<HTMLDivElement>;
export type ModalTitleProps = HTMLAttributes<HTMLHeadingElement>;
export type ModalDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

export type ModalCloseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
