/* global angular */

angular.module('homescreenDemo',
    [
        'ngAnimate',
        'ngMaterial',
        'homescreen'
    ]
)
.config(
    [
        '$mdThemingProvider',
        function($mdThemingProvider) {
            $mdThemingProvider.theme('default')
            .primaryPalette('green')
            .accentPalette('blue',{
                'default': 'A400',
                'hue-1': 'A700'
            })
            .warnPalette('red');
        }
    ]
)
.controller('DemoAppCtrl',
    [
        function() {
            "use strict";

            var vm = this;

            vm.config = {
                background: '#D1C4E9',
                height: '300',
                width: '300'
            }
        }
    ]
);