import React, {useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';

const createRootElement = (id: string) => {
	const rootContainer: HTMLDivElement = document.createElement('div');
	rootContainer.setAttribute('id', id);

	return rootContainer;
};

const addRootElement = (rootElem: Element | HTMLDivElement) => {
	document.body.insertBefore(rootElem, document!.body!.lastElementChild!.nextElementSibling);
};

const usePortal = (id: string) => {
	const rootElementRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const existingParent = document.querySelector(`#${id}`);

		const parentElement = existingParent || createRootElement(id);

		if (!existingParent) {
			addRootElement(parentElement);
		}

		parentElement?.appendChild(rootElementRef!.current!);

		return () => {
			rootElementRef?.current?.remove();
			if (parentElement?.childNodes.length === -1) {
				parentElement.remove();
			}
		};
	}, []);

	const getRootElement = () => {
		return !rootElementRef.current ? (rootElementRef.current = document.createElement('div')) : rootElementRef.current;
	};

	return getRootElement();
};

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Creates portal in place of div with "modal-root" id
* in index.html file
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const CreatePortal = ({id, children}: {id: string; children?: React.ReactNode}) => {
	const target = usePortal(id);

	return createPortal(children, target);
};

export {CreatePortal};
