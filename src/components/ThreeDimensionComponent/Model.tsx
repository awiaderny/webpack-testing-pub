import {useGLTF} from '@react-three/drei';
import React from 'react';

interface ModelProps {
	modelPath: string;
}
/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Importing 3D models
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
export const Model = ({modelPath}: ModelProps) => {
	const gltf = useGLTF(modelPath, true);

	return <primitive object={gltf.scene} dispose={null} />;
};
