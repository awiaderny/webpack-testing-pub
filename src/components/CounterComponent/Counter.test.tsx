import {fireEvent, render} from '@testing-library/react';
import React from 'react';
import {Counter} from './Counter';

describe('counter buttons test', () => {
	it('Counter load with initial value of 1', () => {
		const {getByTestId} = render(<Counter />);
		const countValue = getByTestId('countvalue');

		expect(countValue.textContent).toBe('1');
	});
	it('should increment count by 1', () => {
		const {getByText, getByTestId} = render(<Counter />);
		const countValue = getByTestId('countvalue');

		fireEvent.click(getByText(/Increment/));

		expect(countValue.textContent).toBe('2');
	});
	it('should increment by 1, then decrement count twice by 1 and not be below 1', () => {
		const {getByText, getByTestId} = render(<Counter />);
		const countValue = getByTestId('countvalue');

		fireEvent.click(getByText(/Increment/));
		fireEvent.click(getByText(/Decrement/));
		fireEvent.click(getByText(/Decrement/));

		expect(countValue.textContent).toBe('1');
	});
});
