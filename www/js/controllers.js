angular.module('starter.controllers', ['Simos.directive', 'ionic'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http, $cookieStore, $rootScope, $ionicPopover, $ionicPopup, $timeout, $state, $ionicSlideBoxDelegate) {
    // Form data for the login modal
    $scope.loginData = {};
    var server = 'http://192.168.1.111:8000';

    //var template = 'I really understand this!';
    var template = '<ion-popover-view><ion-content> Hello! </ion-content></ion-popover-view>';

    $scope.popover = $ionicPopover.fromTemplate(template, {
        scope: $scope,
    });

    var closePopover = function() {
        $scope.popover.hide();
    };

    $scope.openPopover = function($event) {
        //$scope.popover.show($event);
        $scope.popover.show();
    };

    $scope.showPopup = function() {
        console.log('test');
        $scope.data = {}

        // An elaborate, custom popup
        // var myPopup = $ionicPopup.show({
        //     template: '<h1>hello</h1><h2>world</h2>',
        //     title: number,
        //     scope: $scope
        // });
        var myPopup = $ionicPopup.alert({
            title: 'Don\'t eat that!' + 1,
            template: 'It might taste good' + 2
        });
        myPopup.then(function(res) {
            console.log('Tapped!', res);
        });
        // $timeout(function() {
        //     myPopup.close(); //close the popup after 3 seconds for some reason
        // }, 3000);
    };

    $scope.testUP = function() {
        var myPopup = $ionicPopup.show({
            title: 'Test', // String. The title of the popup.
            cssClass: 'newPop', // String, The custom CSS class name
            subTitle: 'test subTitle', // String (optional). The sub-title of the popup.
            template: '<h1>hello word</h1>', // String (optional). The html template to place in the popup body.
            //templateUrl: '', // String (optional). The URL of an html template to place in the popup   body.
            scope: $scope, // Scope (optional). A scope to link to the popup content.
            buttons: [{ // Array[Object] (optional). Buttons to place in the popup footer.
                text: '',
                type: 'button-circle ion-close-round',
                onTap: function(e) {
                    // e.preventDefault() will stop the popup from closing when tapped.
                    //e.preventDefault();
                    console.log('cancel');

                    //$ionicPopup.hide();
                }
            }, {
                text: '',
                type: 'button-circle ion-checkmark-round',
                onTap: function(e) {
                    // e.preventDefault() will stop the popup from closing when tapped.
                    //e.preventDefault();
                    console.log('ok');
                    return $http({
                        url:server+'/producerDecision/1/1/TEST',
                        method:'GET'
                    });
                    //$ionicPopup.hide();
                }
            }]
        });
        myPopup.then(function(res) {
            console.log('Tapped!', res);
        });
    }

    $scope.showCaseAlert = function(CaseItem) {
        var template='<p>'+CaseItem.detail+'</p>';
        if(!CaseItem.allowed){
            template+='<p>Started on:'+CaseItem.startTime+'</p><p>Finshed on:'+CaseItem.endTime+'</p>';
        }
        var alertPopup = $ionicPopup.alert({
            title: CaseItem.title,
            template:template
        });


        alertPopup.then(function(res) {
            var confirmPopup = $ionicPopup.confirm({
                title: 'Consume Ice Cream',
                template: 'Are you sure you want to eat this ice cream?Are you sure you want to eat this ice cream?Are you sure you want to eat this ice cream?Are you sure you want to eat this ice cream?Are you sure you want to eat this ice cream?Are you sure you want to eat this ice cream?Are you sure you want to eat this ice cream?Are you sure you want to eat this ice cream?Are you sure you want to eat this ice cream?Are you sure you want to eat this ice cream?Are you sure you want to eat this ice cream?Are you sure you want to eat this ice cream?Are you sure you want to eat this ice cream? Are you sure you want to eat this ice cream?Are you sure you want to eat this ice cream?Are you sure you want to eat this ice cream?Are you sure you want to eat this ice cream?Are you sure you want to eat this ice cream?Are you sure you want to eat this ice cream?Are you sure you want to eat this ice cream?Are you sure you want to eat this ice cream?Are you sure you want to eat this ice cream?Are you sure you want to eat this ice cream?Are you sure you want to eat this ice cream?Are you sure you want to eat this ice cream?Are you sure you want to eat this ice cream?'
            });
            confirmPopup.then(function(res) {
                if (res) {
                    console.log('You are sure');

                    confirmPopup = $ionicPopup.confirm({
                        title: 'Case Intro',
                        template: 'Are you sure you want to eat this ice cream Are you sure you want to eat this ice cream?'
                    });

                    confirmPopup.then(function(res) {
                        if (res) {
                            $state.go('app.overView');
                        } else {
                            console.log('You are not sure');
                        }
                    });

                } else {
                    console.log('You are not sure');
                }
            });
            //console.log('Thank you for not eating my delicious ice cream cone');
        });
    };


    $scope.oldCaseUp = function(CaseItem) {
        var template = '<p>' + CaseItem.detail + '</p>';
        template += '<p>Started on:' + CaseItem.startTime + '</p><p>Finshed on:' + CaseItem.endTime + '</p>';
        var popup = $ionicPopup.alert({
            title: CaseItem.title, // String. The title of the popup.
            cssClass: 'alert-border-pop', // String, The custom CSS class name
            //subTitle: 'test subTitle', // String (optional). The sub-title of the popup.
            template: template, // String (optional). The html template to place in the popup body.
            //templateUrl: '', // String (optional). The URL of an html template to place in the popup   body.
            scope: $scope, // Scope (optional). A scope to link to the popup content.
            okText: ' ',
            okType: 'button-circle ion-checkmark-round',
        });
        popup.then(function(res) {
            console.log('Tapped!', res);
        });
    }

    $scope.newCaseUp = function(CaseItem) {
        var template = '<p>' + CaseItem.detail + '</p>';

        var popup = $ionicPopup.alert({
            title: CaseItem.title,
            cssClass: 'alert-border-pop',
            template: template,
            scope: $scope, // Scope (optional). A scope to link to the popup content.
            okText: 'PLAY',
            okType: 'button-with-font'
        });
        popup.then(function(res) {

            if (CaseItem.isRuning) {

                template = "<p>While it's possible for buttons to use a child <i> to set the icon, they can also set their icon just by setting the buttons own class. Please take a look at button icon docs for more info. Note: Ionic is certainly not restricted to using only the Ionicons icon pack, so please feel free to use any icons you wish.</p>"+
                "<p>Ionic is an open source framework released under a permissive MIT license. This means you can use Ionic in your own personal or commercial projects for free. MIT is the same license used by such popular projects as jQuery and Ruby on Rails.</p>"+
                "<p>The website content here (found in the ionic-site repo) is under the Apache 2 license.</p>"+
                "<p>We'd love to have you help improve Ionic, whether it's improving the framework's code, or touching up the documentation. For more information on Contributing, check out our Contributor Guide.</p>";

                popup = $ionicPopup.show({
                    title: 'Training Info',
                    cssClass: 'normal-border-pop',
                    template: template,
                    scope: $scope, // Scope (optional). A scope to link to the popup content.
                    buttons: [{ // Array[Object] (optional). Buttons to place in the popup footer.
                        text: '',
                        type: 'button-circle ion-close-round',
                        onTap: function(e) {
                            console.log('cancel1');
                            return false;
                        }
                    }, {
                        text: '',
                        type: 'button-circle ion-checkmark-round',
                        onTap: function(e) {
                            console.log('ok1');
                            return true;
                        }
                    }]
                });
                popup.then(function(res) {

                    if (res) {
                        template="<p>Welcome! Ionic is a powerful HTML5 native app development framework that helps you build native-feeling mobile apps all with web technologies like HTML, CSS, and Javascript.</p>"+
                        "<p>Ionic is focused mainly on the look and feel, and UI interaction of your app. That means we aren't a replacement for PhoneGap or your favorite Javascript framework. Instead, Ionic simply fits in well with these projects in order to simplify one big part of your app: the front end. We recommend reading Where does the Ionic Framework fit in? to get a good understanding of the framework's goals.</p>"+
                        "<p>Ionic currently requires AngularJS in order to work at its full potential. While you can still use the CSS portion of the framework, you'll miss out on powerful UI interactions, gestures, animations, and other things.</p>"+
                        "<p>We will be releasing Cordova/PhoneGap plugins in the future to expand the capabilities of your apps.</p>";
                        popup = $ionicPopup.show({
                            title: 'Case '+CaseItem.title+' Intro',
                            cssClass: 'normal-pop',
                            template: template,
                            scope: $scope, // Scope (optional). A scope to link to the popup content.
                            buttons: [{ // Array[Object] (optional). Buttons to place in the popup footer.
                                text: '',
                                type: 'button-circle ion-close-round',
                                onTap: function(e) {
                                    console.log('cancel2');
                                    return false;
                                }
                            }, {
                                text: '',
                                type: 'button-circle ion-checkmark-round',
                                onTap: function(e) {
                                    console.log('ok2');
                                    return true;
                                }
                            }]
                        });
                        popup.then(function(res) {
                            if (res) {
                                console.log('GO TO overViewA');
                                $state.go('app.overView');
                            }
                        });
                    }

                });
            } else {

                template = "<p>Welcome! Ionic is a powerful HTML5 native app development framework that helps you build native-feeling mobile apps all with web technologies like HTML, CSS, and Javascript.</p>" +
                    "<p>Ionic is focused mainly on the look and feel, and UI interaction of your app. That means we aren't a replacement for PhoneGap or your favorite Javascript framework. Instead, Ionic simply fits in well with these projects in order to simplify one big part of your app: the front end. We recommend reading Where does the Ionic Framework fit in? to get a good understanding of the framework's goals.</p>" +
                    "<p>Ionic currently requires AngularJS in order to work at its full potential. While you can still use the CSS portion of the framework, you'll miss out on powerful UI interactions, gestures, animations, and other things.</p>" +
                    "<p>We will be releasing Cordova/PhoneGap plugins in the future to expand the capabilities of your apps.</p>";
                popup = $ionicPopup.show({
                    title: 'Case ' + CaseItem.title + ' Intro',
                    cssClass: 'normal-pop',
                    template: template,
                    scope: $scope, // Scope (optional). A scope to link to the popup content.
                    buttons: [{ // Array[Object] (optional). Buttons to place in the popup footer.
                        text: '',
                        type: 'button-circle ion-close-round',
                        onTap: function(e) {
                            console.log('cancel3');
                            return false;
                        }
                    }, {
                        text: '',
                        type: 'button-circle ion-checkmark-round',
                        onTap: function(e) {
                            console.log('ok3');
                            return true;
                        }
                    }]
                });

                popup.then(function(res) {
                    console.log(res);
                    if (res) {
                        console.log('GO TO overViewB');
                        $state.go('app.overView');
                    }

                })
            }
        })
    }

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

    $scope.number=0;
    $scope.numberInfo="hello";

    $scope.oldlists=[{
        title: 'Old Reggae',
        detail: 'Old Reggae',
        startTime:'2013/4/5',
        endTime:'2014.5.1',
        allowed:false
    }, {
        title: 'Old Chill',
        detail: 'Old Chill',
        startTime:'2013/4/5',
        endTime:'2014.5.1',
        allowed:false
    }, {
        title: 'Old Dubstep',
        detail: 'Old Dubstep',
        startTime:'2013/4/5',
        endTime:'2014.5.1',
        allowed:false
    }, {
        title: 'Old Indie',
        detail: 'Old Indie',
        startTime:'2013/4/5',
        endTime:'2014.5.1',
        allowed:false
    }, {
        title: 'Old Rap',
        detail: 'Old Rap',
        startTime:'2013/4/5',
        endTime:'2014.5.1',
        allowed:false
    }, {
        title: 'Old Cowbell',
        detail: 'Old Cowbell',
        startTime:'2013/4/5',
        endTime:'2014.5.1',
        allowed:false
    }];

    $scope.caselists = [{
        title: 'Reggae',
        detail: 'Detail for Reggae',
        allowed:true,
        isRuning:true
    }, {
        title: 'Chill',
        detail: 'Detail for Chill',
        allowed:true,
        isRuning:false
    }, {
        title: 'Dubstep',
        detail: 'Detail for Dubstep',
        allowed:true,
        isRuning:true
    }, {
        title: 'Indie',
        detail: 'Detail for Indie',
        allowed:true,
        isRuning:false
    }, {
        title: 'Rap',
        detail: 'Detail for Rap',
        allowed:true,
        isRuning:true
    }, {
        title: 'Cowbell',
        detail: 'Detail for Cowbell',
        allowed:true,
        isRuning:false
    }];


    $scope.playerlists = [{
        pageID: 1,

        rows: [{
            row: [{
                name: 'Reggae',
                id: 1
            }, {
                name: 'Chill',
                id: 2
            }, {
                name: 'Dubstep',
                id: 3
            }]
        }, {
            row: [{
                name: 'Indie',
                id: 4
            }, {
                name: 'Rap',
                id: 5
            }, {
                name: '1 Reggae',
                id: 6
            }]
        }, {
            row: [{
                name: 'Reggae',
                id: 7
            }, {
                name: 'Chill',
                id: 8
            }, {
                name: 'Dubstep',
                id: 9
            }]
        }, {
            row: [{
                name: 'Reggae',
                id: 10
            }, {
                name: 'Chill',
                id: 11
            }, {
                name: 'Dubstep',
                id: 12
            }]
        }, {
            row: [{
                name: 'Reggae',
                id: 13
            }, {
                name: 'Chill',
                id: 14
            }, {
                name: 'Dubstep',
                id: 15
            }]
        }]
    }, {
        pageID: 2,

        rows: [{
            row: [{
                name: 'Reggae',
                id: 21
            }, {
                name: 'Chill',
                id: 22
            }, {
                name: 'Dubstep',
                id: 23
            }]
        }, {
            row: [{
                name: 'Indie',
                id: 24
            }, {
                name: 'Rap',
                id: 25
            }, {
                name: '1 Reggae',
                id: 26
            }]
        }, {
            row: [{
                name: 'Reggae',
                id: 27
            }, {
                name: 'Chill',
                id: 28
            }, {
                name: 'Dubstep',
                id: 29
            }]
        }, {
            row: [{
                name: 'Reggae',
                id: 210
            }, {
                name: 'Chill',
                id: 211
            }, {
                name: 'Dubstep',
                id: 212
            }]
        }, {
            row: [{
                name: 'Reggae',
                id: 213
            }, {
                name: 'Chill',
                id: 214
            }, {
                name: 'Dubstep',
                id: 215
            }]
        }]
    }, {
        pageID: 3,

        rows: [{
            row: [{
                name: 'Reggae',
                id: 31
            }, {
                name: 'Chill',
                id: 32
            }, {
                name: 'Dubstep',
                id: 33
            }]
        }, {
            row: [{
                name: 'Indie',
                id: 34
            }, {
                name: 'Rap',
                id: 35
            }, {
                name: '1 Reggae',
                id: 36
            }]
        }, {
            row: [{
                name: 'Reggae',
                id: 37
            }, {
                name: 'Chill',
                id: 38
            }, {
                name: 'Dubstep',
                id: 39
            }]
        }, {
            row: [{
                name: 'Reggae',
                id: 310
            }, {
                name: 'Chill',
                id: 311
            }, {
                name: 'Dubstep',
                id: 312
            }]
        }, {
            row: [{
                name: 'Reggae',
                id: 313
            }, {
                name: 'Chill',
                id: 314
            }, {
                name: 'Dubstep',
                id: 315
            }]
        }]
    }, {
        pageID: 4,

        rows: [{
            row: [{
                name: 'Reggae',
                id: 41
            }, {
                name: 'Chill',
                id: 42
            }, {
                name: 'Dubstep',
                id: 43
            }]
        }, {
            row: [{
                name: 'Indie',
                id: 44
            }, {
                name: 'Rap',
                id: 45
            }, {
                name: '1 Reggae',
                id: 46
            }]
        }, {
            row: [{
                name: 'Reggae',
                id: 47
            }, {
                name: 'Chill',
                id: 48
            }, {
                name: 'Dubstep',
                id: 49
            }]
        }, {
            row: [{
                name: 'Reggae',
                id: 410
            }, {
                name: 'Chill',
                id: 411
            }, {
                name: 'Dubstep',
                id: 412
            }]
        }, {
            row: [{
                name: 'Reggae',
                id: 413
            }, {
                name: 'Chill',
                id: 414
            }, {
                name: 'Dubstep',
                id: 415
            }]
        }]
    }, {
        pageID: 5,

        rows: [{
            row: [{
                name: 'Reggae',
                id: 51
            }, {
                name: 'Chill',
                id: 52
            }, {
                name: 'Dubstep',
                id: 53
            }]
        }, {
            row: [{
                name: 'Indie',
                id: 54
            }, {
                name: 'Rap',
                id: 55
            }, {
                name: '1 Reggae',
                id: 56
            }]
        }, {
            row: [{
                name: 'Reggae',
                id: 57
            }, {
                name: 'Chill',
                id: 58
            }, {
                name: 'Dubstep',
                id: 59
            }]
        }, {
            row: [{
                name: 'Reggae',
                id: 510
            }, {
                name: 'Chill',
                id: 511
            }, {
                name: 'Dubstep',
                id: 512
            }]
        }, {
            row: [{
                name: 'Reggae',
                id: 513
            }, {
                name: 'Chill',
                id: 514
            }]
        }]
    }];


    $scope.previousDisabled = true;
    $scope.nextDisabled = false;

    $scope.previousSlide=function(){
        $ionicSlideBoxDelegate.previous();
        if ($ionicSlideBoxDelegate.currentIndex() == 0) {
            $scope.previousDisabled = true;
        } else if ($ionicSlideBoxDelegate.currentIndex() == $ionicSlideBoxDelegate.slidesCount()) {
            $scope.nextDisabled = true;
        } else {
            $scope.previousDisabled = false;
            $scope.nextDisabled = false;
        }
    }

    $scope.nextSlide=function(){
        $ionicSlideBoxDelegate.next();
        
        if ($ionicSlideBoxDelegate.currentIndex() == 0) {
            $scope.previousDisabled = true;
        } else if ($ionicSlideBoxDelegate.currentIndex() == $ionicSlideBoxDelegate.slidesCount()-1) {
            $scope.nextDisabled = true;
        } else {
            $scope.previousDisabled = false;
            $scope.nextDisabled = false;
        }
    }



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