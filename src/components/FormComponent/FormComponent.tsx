import React, {ChangeEvent, Fragment, useState} from 'react';
import '../../index.scss';

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE The form lets the user input their name and save it
* to local storage
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const FormComponent = () => {
	const [formValues, setFormValues] = useState({
		name: ''
	});

	const updateFormField = (e: ChangeEvent<HTMLInputElement>) => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value
		});
		localStorage.setItem('firstName', e.target.value);
	};

	return (
		<Fragment>
			<section className='section__form' data-testid='container__form'>
				<div className='slide-2-flex-item__numbering-third-tab'>
					<p>3</p>
				</div>
				<div className='container-form'>
					<h1>Insert your name</h1>
					<section className='container-form__input-with-label'>
						<div>
							<label htmlFor='name' id='name'>
								Name
							</label>
						</div>
						<div>
							<input
								data-testid='form-name-input'
								name='name'
								onChange={updateFormField}
								placeholder='Name'
								type='text'
								value={formValues.name}
							/>
						</div>
					</section>
				</div>
			</section>
		</Fragment>
	);
};

export {FormComponent};
