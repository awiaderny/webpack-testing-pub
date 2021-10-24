import {MainPageHook} from 'MainPageHook';
import React from 'react';
import {RewardComponent} from '../components/RewardComponent/RewardComponent';

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Content of the third slide:
* 1. Reward component and its contents
* 2. Portal which renders with data from local storage after chest icon is clicked
* 3. Navigation using previous button
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const ThirdSlideContent = () => {
	const {handleGoToSecondSlide} = MainPageHook();

	return (
		<section className='slide slide-3'>
			<RewardComponent />
			<button className='btn btn-go-prev-slide-3' onClick={handleGoToSecondSlide}>
				Previous
			</button>
		</section>
	);
};

export {ThirdSlideContent};
