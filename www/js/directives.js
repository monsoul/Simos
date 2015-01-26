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

    directive.directive('circleBody', ['$compile',
        function($compile) {
            return function(scope, element, attr) {

                jQuery(function($) {

                    var cirecleLeft = ($('#myCircle')[0].offsetWidth - $('#canvas').width()) / 2;
                    var cirecleTop = ($('#myCircle')[0].offsetHeight - $('#canvas').width()) / 2;

                    $('#canvas').css({
                        top: cirecleTop,
                        left: cirecleLeft
                    });
                    $('#drag').css({
                        top: cirecleTop - $('#drag').width() / 2,
                        left: cirecleLeft - $('#drag').width() / 2 + $('#canvas').width() / 2
                    });

                    var drag = $('#drag');
                    drag.draggable({
                        start: function(e) {
                            if (!drag.data('circle'))
                                drag.data('circle', {
                                    radius: $('#canvas').width() / 2,
                                    centerX: cirecleLeft + $('#canvas').width() / 2 - $('#drag').width() / 2,
                                    centerY: cirecleTop + $('#canvas').width() / 2 - $('#drag').width() / 2
                                });
                        },
                        drag: function(e, ui) {
                            var data = drag.data('circle');
                            var angle = Math.atan2(e.pageX - data.centerX, e.pageY - data.centerY);
                            var postop = Math.ceil((data.centerY + (Math.cos(angle) * data.radius)));
                            var posleft = Math.ceil((data.centerX + (Math.sin(angle) * data.radius)))
                            ui.position.top = postop;
                            ui.position.left = posleft;

                            var x = (posleft  - (cirecleLeft + $('#canvas').width() / 2 - $('#drag').width() / 2)) / 150;
                            var y = (postop  - (cirecleTop + $('#canvas').width() / 2 - $('#drag').width() / 2)) / 150;

                            var cos = (180-Math.atan2(x, y) * 180 / Math.PI)/360*24 //;
                            scope.number=cos;
                            scope.$apply();



                        }
                    });
                });
            }
        }
    ]);


})();