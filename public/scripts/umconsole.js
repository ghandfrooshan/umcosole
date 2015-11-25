angular.module('umconsole', ['ui.router'])

	.config(function ($stateProvider, $locationProvider) {

		$stateProvider
			.state('home', {
				url: '/',
				views: {
					main: {
						templateUrl: 'templates/home'
					}
				}
			})
			.state('definations', {
				url: '/definations',
				views: {
					main: {
						templateUrl: 'templates/definations'
					}
				}
			})
			.state('definations.users', {
				url: '/definations/users',
				views: {
					main: {
						templateUrl: 'templates/definations/users'
					}
				}
			})

		$locationProvider.html5Mode(true);
	})

	.controller('NavCtrl', function ($scope) {

	})
	.controller('headerCtrl', function ($scope) {

	})