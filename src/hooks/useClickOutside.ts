import { RefObject, useEffect } from "react";

interface UseClickOutsideProps<T extends HTMLElement> {
	targetRef: RefObject<T>;
	handler: (e: MouseEvent | TouchEvent) => void;
	excludeRefs: React.RefObject<HTMLElement>[];
}

export const useClickOutside = <T extends HTMLElement>({
	targetRef,
	handler,
	excludeRefs,
}: UseClickOutsideProps<T>) => {
	useEffect(() => {
		const listener = (e: MouseEvent | TouchEvent) => {
			if (!targetRef.current || targetRef.current.contains(e.target as Node))
				return;

			const isClickedOnExcluded = excludeRefs.some((excludeRef) => {
				return (
					excludeRef.current && excludeRef.current.contains(e.target as Node)
				);
			});
			if (isClickedOnExcluded) return;

			handler(e);
		};

		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);

		return () => {
			document.addEventListener("mousedown", listener);
			document.addEventListener("touchstart", listener);
		};
	}, [excludeRefs, handler, targetRef]);
};
