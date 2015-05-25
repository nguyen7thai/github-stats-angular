githubStats.factory('sessionsResource', ['$resource', function($resource) {
  return $resource(API_SERVER + 'sessions/:id.json',
    {
      id: '@id'
    }
  );
}])
