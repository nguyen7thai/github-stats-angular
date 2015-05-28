var API_SERVER = 'http://gistats.eastruby.com/api/v1/'
var githubStats = angular.module('githubStats',
  [
    'ngRoute',
    'ngResource',
    'ui.router',
    'angularMoment',
    'session',
    'repository',
    'commentCount'
  ])
