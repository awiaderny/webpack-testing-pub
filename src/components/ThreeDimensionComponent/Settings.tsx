import React, {useRef} from 'react';
import {ReactThreeFiber, useFrame, useThree} from 'react-three-fiber';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

// * NOTE Light settings for single animal model
export const Lights = () => (
	<>
		<ambientLight intensity={0.3} />
		<directionalLight position={[10, 10, 5]} intensity={1} />
		<directionalLight position={[0, 10, 0]} intensity={1.5} />
		<spotLight position={[0, 1000, 0]} intensity={1} />
	</>
);

// * NOTE Hack so that react recognizes camelCased tags inside JSX element
declare global {
	namespace JSX {
		interface IntrinsicElements {
			orbitControls: ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>;
		}
	}
}

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Orbit settings and setup (Spinning animation for 3D
* models, also when the user clicks and drags the 3D model.)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
export const OrbitControlsSettings = () => {
	const orbitRef = useRef<any>(null);
	const {camera, gl} = useThree();
	useFrame(() => {
		orbitRef?.current?.update();
	});

	return (
		<orbitControls args={[camera, gl.domElement]} autoRotate maxPolarAngle={Math.PI / 3} minPolarAngle={Math.PI / 3} ref={orbitRef} />
	);
};
