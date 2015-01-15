(function() {
    'use strict';

    var service = angular.module('Simos.services', []);

    service.factory('UserInfo', function() {
        var user = {
            username: '',
            role: 'guest'
        };
        return {
            setUser: function(newUser) {
                user.username = newUser.username;
                user.role = newUser.role;
            },
            getUser: function() {
                return user;
            }
        }
    })

})();