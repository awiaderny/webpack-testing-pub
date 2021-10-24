import {Html} from '@react-three/drei';
import React, {Suspense} from 'react';
import {Canvas} from 'react-three-fiber';
import {ChickenModel} from './ChickenModel';
import {CowModel} from './CowModel';
import {DuckModel} from './DuckModel';
import {Lights, OrbitControlsSettings} from './Settings';

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Content inside react-three-fiber HTML tags:
* 1. 3D animal models (3 models)
* 2. Buttons to chose an animal and save its name to local
*    storage (that play sound after click)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
export const HTMLContent = ({
	CHICKEN_Z_POSITION,
	COW_Z_POSITION,
	DUCK_Z_POSITION
}: {
	CHICKEN_Z_POSITION: number;
	COW_Z_POSITION: number;
	DUCK_Z_POSITION: number;
}) => {
	const CowSound = new Audio('./sounds/Cow/cow.mp3');
	const ChickenSound = new Audio('./sounds/Chicken/chicken.mp3');
	const DuckSound = new Audio('./sounds/Duck/duck.mp3');

	const handleChoseAnimal = (animal: string) => localStorage.setItem('chosenAnimal', animal);

	const playCowSound = async (): Promise<void> => {
		handleChoseAnimal('Cow');

		return CowSound.play();
	};

	const playChickenSound = async (): Promise<void> => {
		handleChoseAnimal('Chicken');

		return ChickenSound.play();
	};

	const playDuckSound = async (): Promise<void> => {
		handleChoseAnimal('Duck');

		return DuckSound.play();
	};

	return (
		<Html>
			<div className='container-pet'>
				<div className='container-flex-pet'>
					<div className='container-choose-pet container-choose-pet-duck'>
						<Canvas
							camera={{
								position: [0, 0, DUCK_Z_POSITION]
							}}>
							<OrbitControlsSettings />
							<Lights />
							<Suspense fallback={null}>
								<DuckModel />
							</Suspense>
						</Canvas>
						<button className='container-choose-pet-btn__choose-btn-duck' onClick={playDuckSound}>
							Duck
						</button>
					</div>
					<div className='container-choose-pet container-choose-pet-cow'>
						<Canvas
							camera={{
								position: [0, 0, COW_Z_POSITION]
							}}>
							<OrbitControlsSettings />
							<Lights />
							<Suspense fallback={null}>
								<CowModel />
							</Suspense>
						</Canvas>
						<button className='container-choose-pet-btn__choose-btn-cow' onClick={playCowSound}>
							Cow
						</button>
					</div>
					<div className='container-choose-pet container-choose-pet-chicken'>
						<Canvas
							camera={{
								fov: 100,
								position: [0, 0, CHICKEN_Z_POSITION]
							}}>
							<OrbitControlsSettings />
							<Lights />
							<Suspense fallback={null}>
								<ChickenModel />
							</Suspense>
						</Canvas>
						<button className='container-choose-pet-btn__choose-btn-chicken' onClick={playChickenSound}>
							Chicken
						</button>
					</div>
				</div>
			</div>
		</Html>
	);
};
