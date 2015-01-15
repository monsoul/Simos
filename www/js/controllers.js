angular.module('starter.controllers', ['Simos.directive'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http, $cookieStore, $rootScope) {
  // Form data for the login modal
  $scope.loginData = {};
  var server='http://192.168.1.101:8000';

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.logout=function(){
    $cookieStore.remove('user');
    $rootScope.user = $cookieStore.get('user') || {
      username: '',
      role: 'guest'
    };
  }

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    var postData = {
      username: $scope.loginData.username + '^8^1',
      password: $scope.loginData.password,
      rememberme: true
    };

    $http({
      method: 'POST',
      url: server + '/login',
      data: postData
    }).then(function(data) {

      $cookieStore.put('user', {
        'username': $scope.loginData.username,
        'role': 'student'
      });
      $rootScope.user = $cookieStore.get('user') || {
        username: '',
        role: 'guest'
      };

      $timeout(function() {
        $scope.closeLogin();
      }, 1000);

    }, function(data) {
      console.log('fail:' + data);

      $cookieStore.remove('user');

    });
  };

  $scope.showManual=function(item){
    $scope.cardEmailShow=false;
    $scope.cardPhoneShow=false;

    switch(item){
      case 'cardEmailShow':$scope.cardEmailShow=true;break;
      case 'cardPhoneShow':$scope.cardPhoneShow=true;break;
    }
  }

})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
