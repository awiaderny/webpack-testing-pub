import {capitalize} from 'lodash';
import React, {useRef, useState} from 'react';
import onClickOutside, {ConfigObject} from 'react-onclickoutside';
import '../../index.scss';
const DownArrowIcon = require('../../assets/images/down-arrow.svg').default;
const UpArrowIcon = require('../../assets/images/up-arrow.svg').default;

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Select element lets the user choose the color of gift toy
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const SelectElementsComponent = () => {
	const [pickedColor, setPickedColor] = useState<string>('blue');
	const [listOpen, setListOpen] = useState<boolean>(false);

	const toggleList = () => {
		setListOpen(!listOpen);
	};
	const handleToggleList = () => toggleList();

	const handleColorChange = (color: string) => () => {
		setPickedColor(color);
		setListOpen(false);
		localStorage.setItem('chosenColor', color);
	};

	const colors: string[] = ['blue', 'red', 'green', 'yellow'];

	const selectList = () => {
		return (
			<ul className='select-wrapper__list' data-testid='select'>
				{colors.map((color: string) => (
					<li
						className='select-wrapper__list-item'
						data-testid={color}
						key={color}
						onClick={handleColorChange(color)}
						value={color}>
						<span>{capitalize(color)}</span>
					</li>
				))}
			</ul>
		);
	};

	// * NOTE Utility to close select element after clicking
	// * outside of the list
	(SelectElementsComponent as any).handleClickOutside = () => setListOpen(false);

	const headingRef = useRef(null);
	const selectElementRef = useRef(null);

	return (
		<section className='container-select'>
			<div className='slide-2-flex-item__numbering-second-tab'>
				<p>2</p>
			</div>
			<svg className='img-cloud' version='1.1' viewBox='0 0 770 471' xmlns='http://www.w3.org/2000/svg'>
				<title>Combined Shape</title>
				<desc>Created with Sketch.</desc>
				<g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
					<path
						className={`img-cloud-path--${pickedColor}`}
						d='M144.212377,462.78928 C134.83509,464.290153 125.231568,464.438317 115.604179,462.993705 C50.3259969,453.198562 7,409.356552 7,347.533295 C7,289.1092 54.5931438,241.138902 115.307847,236.04052 C114.224391,230.293943 113.659142,224.378971 113.659142,218.339844 C113.659142,162.721071 161.603078,117.633147 220.744921,117.633147 C229.187082,117.633147 237.401075,118.551856 245.280023,120.288762 C278.812818,53.3455432 351.311479,7 435.343115,7 C528.627279,7 607.698907,64.113422 635.029007,143.116433 C708.623372,160.931085 763,223.734176 763,298.475791 C763,387.007045 686.707729,458.788141 592.553415,458.893738 L592.50165,459.255636 L144.212377,462.78928 Z'
						fillRule='nonzero'
						id='Combined-Shape'
						stroke='#46AFE8'
						strokeWidth='14'
					/>
				</g>
			</svg>
			<h2 className='heading__picked-color' ref={headingRef} data-testid='currently-selected-color-text'>
				<legend>Choose a color of the toy (gift) - {pickedColor}</legend>
			</h2>
			<section className='select-wrapper' ref={selectElementRef}>
				<header className='select-header'>
					<div className='select-header__title' data-testid='currently-selected-color' onClick={handleToggleList}>
						{capitalize(pickedColor)}
						<span>
							{listOpen ? (
								<img alt='up arrow' className='select-header__arrow-img' src={UpArrowIcon} />
							) : (
								<img
									alt='down arrow'
									className='select-header__arrow-img'
									src={DownArrowIcon}
									data-testid='opening-down-arrow-icon'
								/>
							)}
						</span>
					</div>
				</header>
				{listOpen ? selectList() : null}
			</section>
		</section>
	);
};

const clickOutsideConfig: ConfigObject | undefined = {
	handleClickOutside: (): void => (SelectElementsComponent as any).handleClickOutside
};

const SelectElements = onClickOutside(SelectElementsComponent, clickOutsideConfig);

export {SelectElements};
