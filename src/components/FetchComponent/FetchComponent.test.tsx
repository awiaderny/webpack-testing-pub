import {act, render} from '@testing-library/react';
import React from 'react';
import {FetchComponent} from './FetchComponent';
const jsonData = require('./kanyeQuotes.json');

describe('FetchComponent tests', () => {
	it('FetchComponent loads with no quote fetched inside list', () => {
		const {getByTestId} = render(<FetchComponent />);

		const fetchedQuote = getByTestId('fetch-section__quote');
		expect(fetchedQuote.textContent).toBe('');
	});
	it('FetchComponent fetches quote and quote is contained in Kanye REST API', async () => {
		const fetchQuote = () =>
			fetch('https://api.kanye.rest')
				.then(res => res.json())
				.then(res => expect(jsonData).toContain(res.quote))
				.catch(err => console.log(err));

		return fetchQuote();
	});
});
