angular.module('starter.controllers', ['Simos.directive', 'ionic'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http, $cookieStore, $rootScope, $ionicPopover, $ionicPopup, $timeout) {
    // Form data for the login modal
    $scope.loginData = {};
    var server = 'http://192.168.1.101:8000';

    //var template = 'I really understand this!';
    var template = '<ion-popover-view><ion-content> Hello! </ion-content></ion-popover-view>';

    $scope.popover = $ionicPopover.fromTemplate(template, {
        scope: $scope,
    });

    var closePopover = function() {
        $scope.popover.hide();
    };

    $scope.openPopover = function($event) {
        console.log($event);
        $event.clientY=100;
        $event.clientX=100;

        $scope.popover.show($event);
    };

    

    $scope.showPopup = function() {
        console.log('test');
        $scope.data = {}

        // An elaborate, custom popup
        var myPopup = $ionicPopup.show({
            template: '<input type="password" ng-model="data.wifi">',
            title: 'Enter Wi-Fi Password',
            subTitle: 'Please use normal things',
            scope: $scope,
            buttons: [{
                text: 'Cancel'
            }, {
                text: '<b>Save</b>',
                type: 'button-positive',
                onTap: function(e) {
                    if (!$scope.data.wifi) {
                        //don't allow the user to close unless he enters wifi password
                        e.preventDefault();
                    } else {
                        return $scope.data.wifi;
                    }
                }
            }]
        });
        myPopup.then(function(res) {
            console.log('Tapped!', res);
        });
        $timeout(function() {
            myPopup.close(); //close the popup after 3 seconds for some reason
        }, 3000);
    };
    // A confirm dialog
    $scope.showConfirm = function() {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Consume Ice Cream',
            template: 'Are you sure you want to eat this ice cream?'
        });
        confirmPopup.then(function(res) {
            if (res) {
                console.log('You are sure');
            } else {
                console.log('You are not sure');
            }
        });
    };

    // An alert dialog
    $scope.showAlert = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Don\'t eat that!',
            template: 'It might taste good'
        });
        alertPopup.then(function(res) {
            console.log('Thank you for not eating my delicious ice cream cone');
        });
    };

    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.popover.remove();
    });
    // Execute action on hide popover
    $scope.$on('popover.hidden', function() {
        // Execute action
    });
    // Execute action on remove popover
    $scope.$on('popover.removed', function() {
        // Execute action
    });

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.myRange = 0;

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
        $scope.modal.show();
    };



    $scope.logout = function() {
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

    $scope.showManual = function(item) {
        $scope.cardEmailShow = false;
        $scope.cardPhoneShow = false;

        switch (item) {
            case 'cardEmailShow':
                $scope.cardEmailShow = true;
                break;
            case 'cardPhoneShow':
                $scope.cardPhoneShow = true;
                break;
        }
    }

    $scope.$watch('myRange',function(oldValue,newValue){

    })

})

.controller('PlaylistsCtrl', function($scope) {
    $scope.playlists = [{
        title: 'Reggae',
        id: 1
    }, {
        title: 'Chill',
        id: 2
    }, {
        title: 'Dubstep',
        id: 3
    }, {
        title: 'Indie',
        id: 4
    }, {
        title: 'Rap',
        id: 5
    }, {
        title: 'Cowbell',
        id: 6
    }];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {});