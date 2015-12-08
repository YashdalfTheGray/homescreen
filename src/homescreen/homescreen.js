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
                    var width, height;

                    if (window.d3) {
                        scope.d3Found = true;

                        width = scope.config.width === 'fill' ? element[0].parentElement.clientWidth : scope.config.width;
                        height = scope.config.height === 'fill' ? element[0].parentElement.clientHeight: scope.config.height;

                        console.log(element);

                        var baseSvg = d3.select(element[0])
                            .append('svg')
                            .attr('width', width)
                            .attr('height', height)

                        var base = baseSvg
                            .append('rect')
                            .attr('width', width)
                            .attr('height', height)
                            .style('fill', scope.config.background);

                        console.log(base);
                    }
                }
            }
        }
    ]
)