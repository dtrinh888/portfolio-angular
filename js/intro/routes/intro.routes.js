portfolio.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('intro', {
			url: '/intro',
			templateUrl: 'html/intro/intro.html',
			controller: 'IntroCtrl',
		});
}]);