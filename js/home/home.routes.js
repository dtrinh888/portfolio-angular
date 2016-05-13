portfolio.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home', {
			url:'/home',
			templateUrl: 'html/home.html',
			controller: 'HomeCtrl'
		});

		$urlRouterProvider.otherwise('home');
}]);