(function() {
    'use strict';
    var directive = angular.module('Simos.directive', []);

    directive.directive('inputRange1', ['$compile',
        function($compile) {
            return function(scope, element, attr) {
                var cust = document.querySelector('#js-vertical1');
                var initCust = new Powerange(cust, {
                    hideRange: true,
                    klass: 'power-ranger',
                    start: 0,
                    max: 3,
                    min: -3,
                    step: 1,
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
                    max: 3,
                    min: -3,
                    step: 1,
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
                    max: 3,
                    min: -3,
                    step: 1,
                    vertical: true
                });
            }
        }
    ]);

    directive.directive('circleBody', ['$compile',
        function($compile) {
            return function(scope, element, attr) {

                $(function() {
                    var myCircleCss = {
                        width: $('#myCircle')[0].offsetWidth,
                        height: $('#myCircle')[0].offsetHeight
                    };
                    var canvasCss = {
                        width: $('#canvas').width()
                    };
                    var dragCss = {
                        width: $('#drag').width()
                    };
                    var dragInfoCss = {
                        width: $('#dragInfo').width()
                    };

                    var cirecleLeft = (myCircleCss.width - canvasCss.width) / 2;
                    var cirecleTop = (myCircleCss.height - canvasCss.width) / 2;

                    $('#canvas').css({
                        top: cirecleTop,
                        left: cirecleLeft
                    });
                    $('#drag').css({
                        top: cirecleTop - dragCss.width / 2,
                        left: cirecleLeft - dragCss.width / 2 + canvasCss.width / 2
                    });
                    $('#dragInfo').css({
                        top: cirecleTop + (canvasCss.width - dragInfoCss.width) / 2,
                        left: cirecleLeft + (canvasCss.width - dragInfoCss.width) / 2
                    });

                    var drag = $('#drag');
                    drag.draggable({
                        start: function(e) {
                            if (!drag.data('circle'))
                                drag.data('circle', {
                                    radius: canvasCss.width / 2,
                                    centerX: cirecleLeft + canvasCss.width / 2 - dragCss.width / 2,
                                    centerY: cirecleTop + canvasCss.width / 2 - dragCss.width / 2
                                });
                        },
                        drag: function(e, ui) {
                            var data = drag.data('circle');
                            var angle = Math.atan2(e.pageX - data.centerX, e.pageY - data.centerY);
                            var postop = Math.ceil((data.centerY + (Math.cos(angle) * data.radius)));
                            var posleft = Math.ceil((data.centerX + (Math.sin(angle) * data.radius)))
                            ui.position.top = postop;
                            ui.position.left = posleft;

                            var x = (posleft - (cirecleLeft + canvasCss.width / 2 - dragCss.width / 2)) / 150;
                            var y = (postop - (cirecleTop + canvasCss.width / 2 - dragCss.width / 2)) / 150;

                            var cos = (180 - Math.atan2(x, y) * 180 / Math.PI) / 360 * 24 //;
                            scope.number = cos.toFixed(0);
                            scope.$apply();
                        }
                    });
                })
            }
        }
    ]);


})();