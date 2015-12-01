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
			// .state('definations', {
			// 	url: '/definations',
			// 	views: {
			// 		main: {
			// 			templateUrl: 'templates/definations'
			// 		}
			// 	}
			// })
			.state('users', {
				url: '/users',
				views: {
					main: {
						templateUrl: 'templates/definations/users',
						controller: 'userCtrl'
					}
				}
			})
			.state('userInProgram', {
				url: '/userInProgram',
				views: {
					main: {
						templateUrl: 'templates/definations/userInProgram',
						controller: 'userInProgramCtrl'
					}
				}
			})

		$locationProvider.html5Mode(true);
	})

	.controller('NavCtrl', function ($scope) {

	})
	.controller('headerCtrl', function ($scope) {

	})
	.controller('userCtrl', function($scope, $http) {
		$scope.users = []

		$http.get('/api/Users').success(function(data){
			$scope.users = data
		})
	})
	.controller('userInProgramCtrl', function ($scope) {
		$scope.Programs=[
			{
				ProgramId:1,
				FarsiName:"مدیریت کاربران و برنامه ها"
			},
			{
				ProgramId:2,
				FarsiName:"مدیریت آزمایشگاه"
			},
			{
				ProgramId:3,
				FarsiName:"سیستم نظارت تردد پرسنل بخش ها"
			},
			{
				ProgramId:4,
				FarsiName:"سیستم بهای تمام شده"
			}
		];
		$scope.ProgramId=-1;
		
	})