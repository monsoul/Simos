(function() {
    'use strict';
    var directive = angular.module('Simos.directive', []);


    directive.directive('addFunction', ['$compile',
        function($compile) {
            return function(scope, element, attr) {

                console.log('directive');
            }
        }
    ])

})();