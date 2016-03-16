import angular from 'angular';
import 'angular-ui-router';
import letsoneComponent from './letsone.component';

let letsoneModule = angular.module('letsone', [
	'ui.router'
]);
letsoneModule.directive('letsone', letsoneComponent);

export default letsoneModule;