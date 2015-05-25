commentListModule.controller('commentCountController',
  ['$scope', 'commentCountResource', function($scope, CommentCount) {
  var fetchData = function(params) {
    CommentCount.get(params, function(data) {
      angular.extend($scope, data);
    });
  }

  var init = function() {
    fetchData();
    $scope.searchForm = {};
    $scope.search = function() {
      fetchData($scope.searchForm)
    }
  }

  init();
}]);
