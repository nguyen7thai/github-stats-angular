commentListModule.controller('commentCountController', ['$scope', 'commentCountResource', function($scope, CommentCount) {
  var fetchData = function(params) {
    CommentCount.get(params, function(data) {
      $scope.comment_analytics = data.comment_analytics;
      $scope.nocomment_people = data.nocomment_people;
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
