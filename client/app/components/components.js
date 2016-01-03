import angular from 'angular';
import Home from './home/home';
import About from './about/about'; 

// Just an(other) aggregator module
let componentModule = angular.module('app.components', [
	Home.name,
	About.name
]);

export default componentModule;