import angular from 'angular';
import 'angular-ui-router';
import navbarComponent from './navbar.component';

console.log(`Loading navbar component`);
let navbarModule = angular.module('navbar', [
	'ui.router'
]);
navbarModule.directive('navbar', navbarComponent);

export default navbarModule;