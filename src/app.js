/* global angular */

angular.module('homescreenDemo', [
    'ngAnimate',
    'ngMaterial'
])
.config([
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
]);