githubStats.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: '/app/components/session/new.html',
        controller: 'sessionsController'
      })
      .state('repositories', {
        url: '/repositories',
        templateUrl: '/app/components/repository/views/index.html',
        controller: 'repositoriesController',
        data: {
          requireLogin: true
        }
      })
      .state('repositoryShow', {
        url: '/repository/:id',
        templateUrl: '/app/components/repository/views/show.html',
        controller: 'repositoryShowController'
      })
      .state('commentCount', {
        url: '/comment_count',
        templateUrl: '/app/components/commentCount/commentCount.html',
        controller: 'commentCountController'
      });
  }
]);

githubStats.run(['$rootScope', '$state', 'SessionService', function($rootScope, $state, SessionService) {
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
    if((toState.data) && (toState.data.requireLogin)) {
      if(SessionService.currentUser == null) {
        event.preventDefault();
        $state.go('login');
      }
    }
  });
}]);
