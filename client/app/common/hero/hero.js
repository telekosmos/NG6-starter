import angular from 'angular';
import 'angular-ui-router';
import heroComponent from './hero.component';

console.log('loading hero');
let heroModule = angular.module('hero', [
	'ui.router'
]);
heroModule.directive('hero', heroComponent);

export default heroModule;