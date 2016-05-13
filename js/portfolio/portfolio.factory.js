portfolio
	.factory('PortfolioFactory', ['$http', function($http){
		return $http.get('../data/projects.json');
	}]);