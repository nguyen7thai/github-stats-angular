repositoryModule.factory('commentCountResource', ['$resource', function($resource) {
  return $resource(API_SERVER +'comments_count/:id.json', {
      id: '@id'
    });
  }
]);
