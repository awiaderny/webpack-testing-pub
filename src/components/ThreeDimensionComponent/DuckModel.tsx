import React, {useRef} from 'react';
import {useFrame} from 'react-three-fiber';
import {Model} from './Model';

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Duck model animation, import, and position in the canvas
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
export const DuckModel = () => {
	const duckModelRef = useRef<any>();

	useFrame(() => (duckModelRef.current.rotation.y += 0.01));

	return (
		<mesh ref={duckModelRef} rotation={[0, -Math.PI / 1.3, 0]}>
			<Model modelPath='./models/Duck/glTF/Duck.gltf' />
		</mesh>
	);
};
