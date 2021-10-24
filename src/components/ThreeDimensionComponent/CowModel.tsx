import React, {useRef} from 'react';
import {useFrame} from 'react-three-fiber';
import {Model} from './Model';

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Cow model animation, import, and position in the canvas
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
export const CowModel = () => {
	const cowModelRef = useRef<any>();

	useFrame(() => (cowModelRef.current.rotation.y += 0.01));

	return (
		<mesh ref={cowModelRef} rotation={[0, -Math.PI / 1.3, 0]}>
			<Model modelPath='./models/Cow/scene.gltf' />
		</mesh>
	);
};
