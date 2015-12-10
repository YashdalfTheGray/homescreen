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

            function onCustomButtonClick(datum, index) {
                console.log(datum, index);
            }

            vm.config = {
                background: '#D1C4E9',
                height: 640,
                width: 480,
                buttons: [
                    { title: 'Test', onClick: onCustomButtonClick },
                    { title: 'Test 2', onClick: onCustomButtonClick }
                ]
            }
        }
    ]
);