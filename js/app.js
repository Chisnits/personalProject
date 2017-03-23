angular.module('bose', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html',
        })
        .state('soundTrueOnEarHome', {
            url: '/soundTrueOnEarHome',
            templateUrl: 'views/soundTrueOnEar/soundTrueOnEarHome.html',
        })
        .state('soundLink', {
            url: '/soundLink',
            templateUrl: 'views/soundLink.html',
        })
        .state('quietComfort', {
            url: '/quietComfort',
            templateUrl: 'views/quietComfort.html',
        })
        .state('freeStyleBuds', {
            url: '/freeStyleBuds',
            templateUrl: 'views/freeStyleBuds.html',
        })
        .state('soundTrueAroundEar', {
            url: '/soundTrueAroundEar',
            templateUrl: 'views/soundTrueAroundEar.html',
        })
        .state('soundTrueOnEarBuyNow', {
            url: '/soundTrueOnEarBuyNow',
            templateUrl: 'views/soundTrueOnEar/soundTrueOnEarBuyNow.html'
        })
        .state('soundTrueOnEarColors', {
            url: '/soundTrueOnEarColors',
            templateUrl: 'views/soundTrueOnEar/soundTrueOnEarColors.html',
            controller: 'colorPicker'
        })
        .state('soundTrueOnEarDimensions', {
            url: '/soundTrueOnEarDimensions',
            templateUrl: 'views/soundTrueOnEar/soundTrueOnEarDimensions.html'
        })
        .state('soundTrueOnEarGallery', {
            url: '/soundTrueOnEarGallery',
            templateUrl: 'views/soundTrueOnEar/soundTrueOnEarGallery.html'
        })
        .state('soundTrueOnEarInTune', {
            url: '/soundTrueOnEarInTune',
            templateUrl: 'views/soundTrueOnEar/soundTrueOnEarInTune.html'
        })
        .state('soundTrueOnEarPowerfulSound', {
            url: '/soundTrueOnEarPowerfulSound',
            templateUrl: 'views/soundTrueOnEar/soundTrueOnEarPowerfulSound.html'
        });
         $urlRouterProvider
            .otherwise('/');
});
