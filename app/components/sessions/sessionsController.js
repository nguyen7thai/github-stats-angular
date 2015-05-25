githubStats.controller('sessionsController',
 ['$scope', '$location', 'sessionsResource', 'SessionService', function($scope, $location, Session, SessionService) {
  $scope.session = {
    username: '',
    password: ''
  };

  $scope.create = function() {
    success = function(data) {
      SessionService.setUserAuthenticated(data.user)
      $location.path('/repositories')
    },
    error = function(data) {
      alert('login failed');
    }
    Session.save($scope.session).$promise.then(success, error);
  }
}]);
