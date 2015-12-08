/* global angular */

angular.module('homescreen',
    [
        'ngAnimate'
    ]
).directive('homescreen',
    [
        '$window',
        function($window) {
            "use strict";

            return {
                restrict: 'AE',
                templateUrl: 'homescreen/homescreen.tpl.html',
                scope: {
                    config: '='
                },
                link: function(scope, element, attr) {
                    if (window.d3) {
                        scope.d3Found = true;
                    }
                }
            }
        }
    ]
)