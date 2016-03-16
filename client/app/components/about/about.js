import angular from 'angular';
import 'angular-ui-router';
import aboutComponent from './about.component';

let aboutModule = angular.module('about', [
	'ui.router'
]);

aboutModule.config(($stateProvider) => {
	$stateProvider
		.state('about', {
			url: '/about',
			template: '<about></about>'
		});
});

aboutModule.directive('about', aboutComponent);

export default aboutModule;