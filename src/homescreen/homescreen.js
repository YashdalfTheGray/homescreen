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

            console.log($window.d3);

            return {
                restrict: 'AE',
                templateUrl: 'homescreen/homescreen.tpl.html',
                scope: {
                    config: '='
                },
                link: function(scope, element, attr) {
                    console.log(scope);
                }
            }
        }
    ]
)