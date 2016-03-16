import angular from 'angular';
import UserFactory from './user.factory';

console.log('loading user module...');
let userModule = angular.module('user', []);
userModule.factory('User', UserFactory);
	
export default userModule; 