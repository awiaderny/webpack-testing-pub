import React, {Fragment, useState} from 'react';
import '../../index.scss';

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Counter element to chose the amount of adopted animals
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const Counter = () => {
	const [count, setCounter] = useState<number>(1);

	const handleClickIncrement = (): void => {
		setCounter(countIncrement => countIncrement + 1);
		localStorage.setItem('chosenAnimalCount', (count + 1).toString());
	};

	// * NOTE Counter is not allowed to go below 1 value
	const handleClickDecrement = (): void => {
		if (count > 1) {
			setCounter(countDecrement => countDecrement - 1);
			localStorage.setItem('chosenAnimalCount', (count - 1).toString());
		}
	};

	return (
		<Fragment>
			<div className='section-counter'>
				<div className='slide-2-flex-item__numbering-first-tab'>
					<p>1</p>
				</div>
				<div className='section-counter-container'>
					<h1 className='section-counter-container__heading'>Select the amount of animals to adopt</h1>
				</div>
				<div className='section-counter-buttons'>
					<div className='section-counter__container-increment'>
						<button className='btn container-increment__counter-btn-increment' onClick={handleClickIncrement}>
							<span>Increment</span>
						</button>
					</div>
					<h2 className='section-counter__count-value' data-testid='countvalue'>
						{count}
					</h2>
					<div className='section-counter__container-decrement'>
						<button className='btn container-decrement__counter-btn-decrement' onClick={handleClickDecrement}>
							<span>Decrement</span>
						</button>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export {Counter};
