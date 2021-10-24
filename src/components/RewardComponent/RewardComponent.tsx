import {gsap} from 'gsap';
import React, {useState} from 'react';
import '../../index.scss';
import {PortalComponent} from './PortalComponent';
const TreasureIcon = require('../../assets/images/treasure.svg').default;
const PortalCloseIcon = require('../../assets/images/close.svg').default;
const SunIcon = require('../../assets/images/sun.svg').default;
const CloudIcon = require('../../assets/images/cloud2.svg').default;

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Content which renders on third slide:
* 1. Chest icon which renders Portal after click
* 2. SVG images and wave/chest animations
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const RewardComponent = () => {
	const [isPortalVisible, setPortalVisible] = useState(false);
	const [chestOpened, setChestOpened] = useState(false);

	const handleButtonClick = () => {
		setChestOpened(true);
		gsap.to('.container-reward-part', {
			duration: 1,
			y: 100
		});
		gsap.to('.container-reward__treasure-img', {
			duration: 0.1,
			repeat: -1,
			x: '-=5',
			y: '+=5',
			yoyo: true
		});
	};

	const handleChestIconClick = () => {
		setPortalVisible(true);
	};

	const handlePortalCloseButtonClick = () => {
		setPortalVisible(false);
	};

	const chosenAnimalFromStorage: string | null = localStorage.getItem('chosenAnimal');
	const chosenColorFromStorage: string | null = localStorage.getItem('chosenColor');
	const chosenAnimalCountFromStorage: string | null = localStorage.getItem('chosenAnimalCount');
	const firstNameFromStorage: string | null = localStorage.getItem('firstName');

	return (
		<React.Fragment>
			<section className='container-reward'>
				<div className='container-reward__container-heading'>
					<h1 className='container-reward__heading'>Press button and then chest which will show beneath waves!</h1>
				</div>
				<button
					className='container-reward__btn-reward'
					data-testid='container-reward__btn-reward'
					onClick={handleButtonClick}
					type='button'>
					Claim reward!
				</button>
				<div className='container-reward__sand-background' />
				<div className='container-reward__container-cloud-img'>
					<img alt='cloud' className='container-reward__cloud-img' src={CloudIcon} />
				</div>
				<div className='container-reward__container-sun-img'>
					<img alt='sun' className='container-reward__sun-img' src={SunIcon} width='100px' />
				</div>
				<div className='container-reward__container-treasure-img'>
					<img
						alt='treasure'
						className='container-reward__treasure-img'
						onClick={handleChestIconClick}
						src={TreasureIcon}
						width='100px'
					/>
				</div>
				<div className='container-reward__info-treasure-opened' data-testid='container-reward__info-treasure-opened'>
					{chestOpened ? <h1>Click chest</h1> : null}
				</div>
				<div className='container-reward-part'>
					<svg className='container-reward-part__svg-wave1' viewBox='0 0 1440 320' xmlns='http://www.w3.org/2000/svg'>
						<path
							className='wave1'
							d='M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
							fill='#0099ff'
							fillOpacity='1'
							id='wave1'
						/>
					</svg>
				</div>
				{isPortalVisible ? (
					<PortalComponent
						handlePortalCloseButtonClick={handlePortalCloseButtonClick}
						PortalCloseIcon={PortalCloseIcon}
						chosenAnimalFromStorage={chosenAnimalFromStorage}
						firstNameFromStorage={firstNameFromStorage}
						chosenColorFromStorage={chosenColorFromStorage}
						chosenAnimalCountFromStorage={chosenAnimalCountFromStorage}
					/>
				) : null}
			</section>
		</React.Fragment>
	);
};

export {RewardComponent};
