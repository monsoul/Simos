(function() {
    'use strict';
    var directive = angular.module('Simos.directive', []);


    directive.directive('addFunction', ['$compile',
        function($compile) {
            return function(scope, element, attr) {

                console.log('directive');
            }
        }
    ]);

    directive.directive('testRange',[])
    directive.directive('testRange', ['$compile', 
        function($compile) {
            return function(scope, element, attr) {
                var cust = document.querySelector('#js-test');
                var initCust = new Powerange(cust, {
                    hideRange: true,
                    start: 0,
                    max:3,
                    min:-3,
                    step:1
                });
            }
        }
    ]);

    directive.directive('inputRange1', ['$compile', 
        function($compile) {
            return function(scope, element, attr) {
                var cust = document.querySelector('#js-vertical1');
                var initCust = new Powerange(cust, {
                    hideRange: true,
                    klass: 'power-ranger',
                    start: 0,
                    max:3,
                    min:-3,
                    step:1,
                    vertical: true
                });
            }
        }
    ]);
    
    directive.directive('inputRange2', ['$compile', 
        function($compile) {
            return function(scope, element, attr) {
                var cust = document.querySelector('#js-vertical2');
                var initCust = new Powerange(cust, {
                    hideRange: true,
                    klass: 'power-ranger',
                    start: 0,
                    max:3,
                    min:-3,
                    step:1,
                    vertical: true
                });
            }
        }
    ]);
    directive.directive('inputRange3', ['$compile', 
        function($compile) {
            return function(scope, element, attr) {
                var cust = document.querySelector('#js-vertical3');
                var initCust = new Powerange(cust, {
                    hideRange: true,
                    klass: 'power-ranger',
                    start: 0,
                    max:3,
                    min:-3,
                    step:1,
                    vertical: true
                });
            }
        }
    ]);

    directive.directive('inputRange3', ['$compile', 
        function($compile) {
            return function(scope, element, attr) {
                var cust = document.querySelector('#js-vertical3');
                var initCust = new Powerange(cust, {
                    hideRange: true,
                    klass: 'power-ranger',
                    start: 0,
                    max:3,
                    min:-3,
                    step:1,
                    vertical: true
                });
            }
        }
    ]);

    directive.directive('circleBody', ['$compile',
        function($compile) {
            return function(scope, element, attr) {

                jQuery(function($) {

                    var cirecleLeft = ($('#myCircle')[0].offsetWidth - 300) / 2;
                    var cirecleTop = ($('#myCircle')[0].offsetHeight - 300) / 2;

                    $('#canvas').css({
                        top: cirecleTop,
                        left: cirecleLeft
                    });
                    $('#drag').css({
                        top: cirecleTop - 10,
                        left: cirecleLeft - 10 + 150
                    });
                    $('#drag').drag('start', function(ev, dd) {
                        if (!$.data(this, 'circle')) {
                            $.data(this, 'circle', {
                                radius: 150,
                                centerX: cirecleLeft + 150 - 10,
                                centerY: cirecleTop + 150 - 10
                            });
                        }
                    })
                    $('#drag').drag(function(ev, dd) {
                        var data = $.data(this, 'circle'),
                            angle = Math.atan2(ev.pageX - data.centerX, ev.pageY - data.centerY);
                        $(this).css({
                            top: data.centerY + Math.cos(angle) * data.radius,
                            left: data.centerX + Math.sin(angle) * data.radius
                        });
                    });
                });
            }
        }
    ]);


})();