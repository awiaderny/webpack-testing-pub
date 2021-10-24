import {fireEvent, render} from '@testing-library/react';
import React from 'react';
import {RewardComponent} from './RewardComponent';

describe('RewardComponent tests', () => {
	it('render button after third slide is showed', () => {
		const {getByTestId} = render(<RewardComponent />);

		const currentClickChestTextState = getByTestId('container-reward__btn-reward');
		expect(currentClickChestTextState.textContent).toBe('Claim reward!');
	});
	it('do not render click chest text before clicking button', () => {
		const {getByTestId} = render(<RewardComponent />);

		const currentClickChestTextState = getByTestId('container-reward__info-treasure-opened');
		expect(currentClickChestTextState.textContent).toBe('');
	});
	it('render click chest text after clicking button', () => {
		const {getByTestId} = render(<RewardComponent />);

		const buttonClaimReward = getByTestId('container-reward__btn-reward');

		fireEvent.click(buttonClaimReward);

		const currentClickChestTextState = getByTestId('container-reward__info-treasure-opened');

		expect(currentClickChestTextState.textContent).toBe('Click chest');
	});
});
