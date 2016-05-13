portfolio.controller('PortfolioCtrl', ['$scope', 'PortfolioFactory', function($scope, PortfolioFactory){
	$scope.portTest = 'Portfolio Test Page';
	PortfolioFactory.success(function(data){
		$scope.projects = data;
	});
}]);