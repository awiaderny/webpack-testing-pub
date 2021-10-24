import {counterDecrementAnimation, counterIncrementAnimation} from 'components/CounterComponent/counterAnimations';
import {formAnimation} from 'components/FormComponent/formComponentAnimations';
import {rewardButtonAnimation} from 'components/RewardComponent/rewardAnimations';
import {selectElementHeadingAnimation, selectElementWrapperAnimation} from 'components/SelectComponent/selectElementAnimations';
import {gsap} from 'gsap';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useState} from 'react';
import './index.scss';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Custom Hook containing full-page transition
* animations after clicking next/previous
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const MainPageHook = () => {
	const [currentSlide, setCurrentSlide] = useState<number>(1);

	const goToSlide = (slide: number) => {
		setCurrentSlide(slide);
		gsap.to('.slides-container', {
			duration: 1,
			scrollTo: {
				y: `.slide-${slide}`
			}
		});
	};

	const handleGoToFirstSlide = () => goToSlide(1);

	const handleGoToSecondSlide = () => {
		goToSlide(2);

		gsap.fromTo('.section-counter__container-increment', counterIncrementAnimation()[0], counterIncrementAnimation()[1]);

		gsap.fromTo('.section-counter__container-decrement', counterDecrementAnimation()[0], counterDecrementAnimation()[1]);
		gsap.fromTo('.heading__picked-color', selectElementHeadingAnimation()[0], selectElementHeadingAnimation()[1]);
		gsap.fromTo('.select-wrapper', selectElementWrapperAnimation()[0], selectElementWrapperAnimation()[1]);
		gsap.from('.container-form', formAnimation());
	};

	const handleGoToThirdSlide = () => {
		goToSlide(3);
		gsap.fromTo('.container-reward__btn-reward', rewardButtonAnimation()[0], rewardButtonAnimation()[1]);
	};

	return {
		currentSlide,
		handleGoToFirstSlide,
		handleGoToSecondSlide,
		handleGoToThirdSlide
	};
};

export {MainPageHook};
