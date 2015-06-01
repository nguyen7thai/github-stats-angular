var API_SERVER = 'http://localhost:3000/api/v1/'
var githubStats = angular.module('githubStats',
  [
    'ngResource',
    'ui.router',
    'angularMoment',
    'repository',
    'commentCount',
    'githubAuthorization'
  ])

var commentListModule = angular.module('commentCount', []);
var githubAuthorizationModule = angular.module('githubAuthorization', []);
var repositoryModule = angular.module('repository', []);
