githubStats.service('SessionService', ['$window', function($window) {
  _this = this;
  this.currentUser = null;
  this.token = '';
  var setAuthorization = function(data) {
    _this.currentUser = data.username;
    _this.token = data.token;
  }

  if($window.localStorage.token != null) {
    setAuthorization($window.localStorage);
  }
  this.setUserAuthenticated = function(data) {
    $window.localStorage.token = data['token'];
    $window.localStorage.username = data['username'];
    setAuthorization(data);
  }

  this.authorization_token = function() {
    return 'Token token=' + _this.token + ', username=' + _this.currentUser;
  }
}]);
