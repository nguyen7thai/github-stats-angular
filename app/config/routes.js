githubStats.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: '/app/components/sessions/new.html',
        controller: 'sessionsController'
      })
      .state('repositories', {
        url: '/repositories',
        templateUrl: '/app/components/repositories/views/index.html',
        controller: 'repositoriesController',
        data: {
          requireLogin: true
        }
      })
      .state('repositoryShow', {
        url: '/repository/:id',
        templateUrl: '/app/components/repositories/views/show.html',
        controller: 'repositoryShowController'
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
