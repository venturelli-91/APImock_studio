"use client";

import { MouseEvent } from "react";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { ModalProps } from "../../../types/shared/modal.types";

const BASE_OVERLAY_CLASSES =
	"fixed inset-0 z-50 flex items-center justify-center bg-gray-950/70 px-4 py-8 backdrop-blur-md";
const BASE_CONTAINER_CLASSES = "w-full max-w-md";
const BASE_CONTENT_CLASSES =
	"relative w-full rounded-2xl border border-white/15 bg-white/80 shadow-lg backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-gray-900/70";

const Modal = ({
	isOpen,
	onClose,
	closeOnOverlayClick = true,
	overlayClassName = "",
	containerClassName = "",
	className = "",
	children,
	...rest
}: ModalProps) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onClose?.();
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isOpen, onClose]);

	useEffect(() => {
		if (!isOpen) return;

		const { body } = document;
		const previousOverflow = body.style.overflow;
		body.style.overflow = "hidden";

		return () => {
			body.style.overflow = previousOverflow;
		};
	}, [isOpen]);

	const handleOverlayClick = () => {
		if (!closeOnOverlayClick) return;
		onClose?.();
	};

	const handleContentClick = (event: MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
	};

	if (!mounted || !isOpen) {
		return null;
	}

	const overlayClasses = `${BASE_OVERLAY_CLASSES} ${overlayClassName}`.trim();
	const containerClasses =
		`${BASE_CONTAINER_CLASSES} ${containerClassName}`.trim();
	const contentClasses = `${BASE_CONTENT_CLASSES} ${className}`.trim();

	return createPortal(
		<div
			className={overlayClasses}
			onClick={handleOverlayClick}>
			<div className={containerClasses}>
				<div
					className={contentClasses}
					role="dialog"
					aria-modal="true"
					onClick={handleContentClick}
					{...rest}>
					{children}
				</div>
			</div>
		</div>,
		document.body
	);
};

export default Modal;
