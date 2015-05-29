githubAuthorizationModule.factory('githubAuthorizationResource', ['$resource', function($resource) {
  return $resource(API_SERVER +'github_sessions/:id.json', {
      id: '@id'
    });
  }
]);
