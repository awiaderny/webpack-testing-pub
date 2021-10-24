import React, {useEffect, useState} from 'react';
import '../../index.scss';

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Component fetches quote from Kanye REST API and maps
* it to JSX
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const FetchComponent = () => {
	const [quote, setQuote] = useState('');

	useEffect(() => {
		fetch('https://api.kanye.rest')
			.then(res => res.json())
			.then(res => setQuote(res.quote))
			.catch(err => console.log(err));
	}, []);

	return (
		<section className='fetch-section'>
			<p>Enjoy random Kanye West quote</p>
			<div className='fetch-section__quote' data-testid='fetch-section__quote'>
				{quote ? <q>{quote}</q> : null}
			</div>
			<p className='fetch-section__quote-author'>- Kanye West</p>
		</section>
	);
};

export {FetchComponent};
