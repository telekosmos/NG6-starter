import template from './letsone.html!text';
import controller from './letsone.controller';
import './letsone.css!';

let letsoneComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default letsoneComponent;
