// tslint:disable: file-name-casing
import {CSSPlugin, gsap} from 'gsap';
import {MainPage} from 'MainPage';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Force CSSPlugin to not get dropped during build
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
gsap.registerPlugin(CSSPlugin);

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<MainPage />
			</React.Fragment>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
