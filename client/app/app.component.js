import template from './app.component.html!text';
import './app.component.css!';

// minimal directive/component definition
let appComponent = () => {
	return {
		template, // because we have a variable name template we can use the shorcut here
		restrict: 'E'
	};
};

export default appComponent;
