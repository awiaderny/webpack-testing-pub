import {gsap} from 'gsap';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {MainPageHook} from 'MainPageHook';
import React, {useEffect, useState} from 'react';
import {FirstSlideContent} from 'slides/FirstSlideContent';
import {SecondSlideContent} from 'slides/SecondSlideContent';
import {ThirdSlideContent} from 'slides/ThirdSlideContent';
import './index.scss';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE The main component containing all slides components and
* animations/logic from MainPageHook
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const MainPage = () => {
	const {currentSlide} = MainPageHook();

	const [_, setPageHeight] = useState(window.innerHeight);

	const updatePageHeight = () => setPageHeight(window.innerHeight);

	useEffect(() => {
		window.addEventListener('resize', updatePageHeight);
		gsap.to('.slides-container', {
			duration: 0.1,
			scrollTo: {
				y: `.slide-${currentSlide}`
			}
		});

		return () => window.removeEventListener('resize', updatePageHeight);
	}, [window.innerHeight]);

	return (
		<React.Fragment>
			<main className='slides-container'>
				<FirstSlideContent />
				<SecondSlideContent />
				<ThirdSlideContent />
			</main>
		</React.Fragment>
	);
};

export {MainPage};
