import angular from 'angular';

import Hero from './hero/hero';
import Navbar from './navbar/navbar';
import User from './user/user';

let commonModule = angular.module('app.common', [
	Hero.name,
	Navbar.name,
	User.name
]);

export default commonModule;