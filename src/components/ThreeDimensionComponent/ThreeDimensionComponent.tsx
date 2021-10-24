import React, {Fragment} from 'react';
import {Canvas, extend} from 'react-three-fiber';
import useMedia from 'react-use/lib/useMedia';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import '../../index.scss';
import {HTMLContent} from './HTMLContent';

extend({OrbitControls});

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE The main component for 3D models containing a main canvas
* which covers all 3 animal models and HTMLContent with 3
* animal models
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const ThreeDimensionComponent = () => {
	// * NOTE Media queries for 3D models position
	const isWide = useMedia('(min-width: 1100px)');
	const CHICKEN_Z_POSITION = isWide ? 3 : 3;
	const COW_Z_POSITION = isWide ? -25 : -25;
	const DUCK_Z_POSITION = isWide ? 3 : 3;

	return (
		<Fragment>
			<Canvas
				camera={{
					position: [0, 0, 0]
				}}>
				<HTMLContent CHICKEN_Z_POSITION={CHICKEN_Z_POSITION} COW_Z_POSITION={COW_Z_POSITION} DUCK_Z_POSITION={DUCK_Z_POSITION} />
			</Canvas>
		</Fragment>
	);
};

export {ThreeDimensionComponent};
