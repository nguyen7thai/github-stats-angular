githubStats.factory('sessionInjector', ['SessionService', function(SessionService) {
  return {
    request: function(config) {
      if (SessionService.currentUser) {
        config.headers['Authorization'] = SessionService.authorization_token();
      }
      return config;
    }
  };
}]);

githubStats.config(['$httpProvider', function($httpProvider) {
  $httpProvider.interceptors.push('sessionInjector');
}]);
