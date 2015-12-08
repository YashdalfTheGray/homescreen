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

                        var baseSvg = d3.select(element[0])
                            .append('svg')
                            .attr('width', scope.config.width)
                            .attr('height', scope.config.height)

                        var base = baseSvg
                            .append('rect')
                            .attr('width', scope.config.width)
                            .attr('height', scope.config.height)
                            .style('fill', scope.config.background);

                        console.log(base);
                    }
                }
            }
        }
    ]
)