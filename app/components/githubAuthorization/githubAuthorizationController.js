githubAuthorizationModule.controller('githubAuthorizationController',
  ['$scope', 'githubAuthorizationResource', 'SessionService', '$state', function($scope, GithubAuthorization, SessionService, $state) {
    var code = location.search.replace('/', '').replace('?code=', '');
    success = function(data) {
      SessionService.setUserAuthenticated(data.user);
      $state.go('repositories');
    },
    error = function(data) {
      alert('Failed: ' + data.data.message);
    }
    GithubAuthorization.save({ code: code }, success, error);
}]);
