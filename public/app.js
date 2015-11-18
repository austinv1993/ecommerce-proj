angular.module('ecommerceApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/')
	
	$stateProvider
		.state('home', {
			url: '/',
			controller: 'mainCtrl',
			templateUrl: './views/main.html'
		})
})