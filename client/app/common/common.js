import angular from 'angular';

import Hero from './hero/hero';
import Navbar from './navbar/navbar';
import User from './user/user';

// Just an aggregator module!!
let commonModule = angular.module('app.common', [
	Hero.name,
	Navbar.name,
	User.name
]);

export default commonModule;