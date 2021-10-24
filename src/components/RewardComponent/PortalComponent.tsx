import React, {Fragment} from 'react';
import '../../index.scss';
import {FetchComponent} from '../FetchComponent/FetchComponent';
import {CreatePortal} from './CreatePortal';

interface Props {
	handlePortalCloseButtonClick(): void;
	PortalCloseIcon: string;
	chosenAnimalFromStorage: string | null;
	firstNameFromStorage: string | null;
	chosenColorFromStorage: string | null;
	chosenAnimalCountFromStorage: string | null;
}

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Content which renders in Portal component after the user
* clicks chest icon with reward
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
export const PortalComponent: React.FC<Props> = ({
	handlePortalCloseButtonClick,
	PortalCloseIcon,
	chosenAnimalFromStorage,
	firstNameFromStorage,
	chosenColorFromStorage,
	chosenAnimalCountFromStorage
}) => {
	return (
		<Fragment>
			<CreatePortal id='modal-root'>
				<section className='container-portal'>
					<div className='container-portal__container-heading'>
						<h1 className='container-portal__heading'>Congratulations</h1>
					</div>
					<header className='container-close-icon'>
						<button className='btn container-close-icon__btn' onClick={handlePortalCloseButtonClick}>
							<span>Close</span>
							<img alt='close portal' className='container-close-icon__img' src={PortalCloseIcon} />
						</button>
					</header>
					<FetchComponent />
					<section className='container-portal__submitted-data'>
						<p>Adopted animal: {chosenAnimalFromStorage}</p>
						<p>Chosen animal name: {firstNameFromStorage}</p>
						<p>Chosen pet toy color: {chosenColorFromStorage}</p>
						<p>Chosen animal count: {chosenAnimalCountFromStorage}</p>
					</section>
				</section>
			</CreatePortal>
		</Fragment>
	);
};
