import React, {useRef} from 'react';
import {useFrame} from 'react-three-fiber';
import {Model} from './Model';

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Chicken model animation, import, and position in the canvas
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
export const ChickenModel = () => {
	const chickenModelRef = useRef<any>();

	useFrame(() => (chickenModelRef.current.rotation.y += 0.01));

	return (
		<mesh ref={chickenModelRef} rotation={[0, -Math.PI / 1.3, 0]}>
			<Model modelPath='./models/Chicken/scene.gltf' />
		</mesh>
	);
};
