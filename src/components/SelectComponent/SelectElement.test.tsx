import {fireEvent, render} from '@testing-library/react';
import React from 'react';
import {SelectElements} from './SelectElement';

describe('SelectElement tests', () => {
	it('select element loads with initial value of select', () => {
		const {getByTestId} = render(<SelectElements />);

		const currentlySelectedColorValue = getByTestId('currently-selected-color');
		expect(currentlySelectedColorValue.textContent).toBe('Blue');
	});
	it('select element changes color', () => {
		const {getByTestId} = render(<SelectElements />);

		const selectElement = getByTestId('currently-selected-color');

		fireEvent.click(selectElement);

		const currentlySelectedColor = getByTestId('blue');

		fireEvent.click(currentlySelectedColor);

		const openingArrowDownIcon = getByTestId('opening-down-arrow-icon');

		fireEvent.click(openingArrowDownIcon);

		const colorToBeSelected = getByTestId('green');

		fireEvent.click(colorToBeSelected);

		const currentlySelectedColorText = getByTestId('currently-selected-color-text');

		expect(currentlySelectedColorText.textContent).toBe('Choose a color of the toy (gift) - green');
	});
});
