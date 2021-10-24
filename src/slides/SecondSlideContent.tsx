import {Counter} from 'components/CounterComponent/Counter';
import {FormComponent} from 'components/FormComponent/FormComponent';
import {SelectElements} from 'components/SelectComponent/SelectElement';
import {MainPageHook} from 'MainPageHook';
import React from 'react';
const BackgroundPicture = require('../assets/images/background/background.png').default;

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Content of the second slide:
* 1. Counter component to chose the amount of adopted animals
* 2. Select component to chose color of gift toy
* 3. Form component to the input user name
* 4. Navigation using next/previous buttons
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const SecondSlideContent = () => {
	const {handleGoToFirstSlide, handleGoToThirdSlide} = MainPageHook();

	return (
		<section className='slide slide-2'>
			<img src={BackgroundPicture} alt='background' className='background-img' />
			<div className='slide-2-flex-item'>
				<Counter />
			</div>
			<div className='slide-2-flex-item'>
				<SelectElements />
			</div>
			<div className='slide-2-flex-item'>
				<FormComponent />
			</div>
			<header className='btn-container-next-prev'>
				<button className='btn btn-go-prev-slide-2' onClick={handleGoToFirstSlide}>
					Previous
				</button>
				<button className='btn btn-go-next-slide-2' onClick={handleGoToThirdSlide}>
					Next
				</button>
			</header>
		</section>
	);
};

export {SecondSlideContent};
