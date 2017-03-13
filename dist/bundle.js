'use strict';

angular.module('bose', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'views/home.html'
    }).state('soundTrueOnEar', {
        url: '/soundTrueOnEar',
        templateUrl: 'views/soundTrueOnEar.html'
    }).state('soundLink', {
        url: '/soundLink',
        templateUrl: 'views/soundLink.html'
    }).state('quietComfort', {
        url: '/quietComfort',
        templateUrl: 'views/quietComfort.html'
    }).state('freeStyleBuds', {
        url: '/freeStyleBuds',
        templateUrl: 'views/freeStyleBuds.html'
    }).state('soundTrueAroundEar', {
        url: '/soundTrueAroundEar',
        templateUrl: 'views/soundTrueAroundEar.html'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

angular.module('bose').controller('mainCtrl', function ($scope) {});
'use strict';

angular.module('bose').directive('headerDirective', function () {
    return {
        restrict: 'E',
        templateUrl: '../views/directives/header.html'
    };
});