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

                        console.log(element);

                        var width = element[0].parentElement.clientWidth - 32;

                        var baseSvg = d3.select(element[0])
                            .append('svg')
                            .attr('width', width)
                            .attr('height', scope.config.height)
                            .style('padding', '8px');

                        var base = baseSvg
                            .append('rect')
                            .attr('width', width)
                            .attr('height', scope.config.height)
                            .style('fill', scope.config.background);

                        console.log(base);
                    }
                }
            }
        }
    ]
)