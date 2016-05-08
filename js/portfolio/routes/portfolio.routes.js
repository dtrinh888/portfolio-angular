portfolio.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('portfolio', {
			url: '/portfolio',
			templateUrl: 'html/portfolio/portfolio.html',
			controller: 'PortfolioCtrl'
		});
}]);