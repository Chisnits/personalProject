'use strict';

angular.module('bose', ['ui.router', 'bc.Flickity']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'views/home.html'
    }).state('soundTrueOnEarHome', {
        url: '/soundTrueOnEarHome',
        templateUrl: './views/soundTrueOnEar/soundTrueOnEarHome.html'
    }).state('soundLink', {
        url: '/soundLink',
        templateUrl: 'views/soundLink.html'
    }).state('quietComfort', {
        url: '/quietComfort',
        templateUrl: 'views/quietComfort.html'
    }).state('freeStyleBuds', {
        url: '/freeStyleBuds',
        templateUrl: 'views/freeStyleBuds.html',
        controller: 'headphonesCtrl'
    }).state('soundTrueAroundEar', {
        url: '/soundTrueAroundEar',
        templateUrl: 'views/soundTrueAroundEar.html'
    }).state('soundTrueOnEarBuyNow', {
        url: '/soundTrueOnEarBuyNow',
        templateUrl: 'views/soundTrueOnEar/soundTrueOnEarBuyNow.html',
        controller: 'colorPicker'
    }).state('soundTrueOnEarColors', {
        url: '/soundTrueOnEarColors',
        templateUrl: 'views/soundTrueOnEar/soundTrueOnEarColors.html',
        controller: 'colorPicker'
    }).state('soundTrueOnEarDimensions', {
        url: '/soundTrueOnEarDimensions',
        templateUrl: 'views/soundTrueOnEar/soundTrueOnEarDimensions.html'
    }).state('soundTrueOnEarGallery', {
        url: '/soundTrueOnEarGallery',
        templateUrl: 'views/soundTrueOnEar/soundTrueOnEarGallery.html'
    }).state('soundTrueOnEarInTune', {
        url: '/soundTrueOnEarInTune',
        templateUrl: 'views/soundTrueOnEar/soundTrueOnEarInTune.html'
    }).state('soundTrueOnEarPowerfulSound', {
        url: '/soundTrueOnEarPowerfulSound',
        templateUrl: 'views/soundTrueOnEar/soundTrueOnEarPowerfulSound.html'
    }).state('soundTrueOnEarGalleryVideo', {
        url: '/soundTrueOnEarGalleryVideo',
        templateUrl: 'views/soundTrueOnEar/gallery/galleryVideo.html'
    }).state('soundTrueOnEarGalleryCenter', {
        url: '/soundTrueOnEarGalleryCenter',
        templateUrl: 'views/soundTrueOnEar/gallery/galleryCenter.html',
        controller: 'galleryCtrl'
    }).state('soundTrueOnEarGalleryRight', {
        url: '/soundTrueOnEarGalleryRight',
        templateUrl: 'views/soundTrueOnEar/gallery/galleryRight.html'
    }).state('soundTrueOnEarCarryingCase', {
        url: '/soundTrueOnEarCarryingCase',
        templateUrl: 'views/soundTrueOnEar/soundTrueOnEarCarryingCase.html'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

angular.module('bose').controller('colorPicker', function ($scope) {
    $scope.test = 'bother';
    $scope.background = '../../assets/images/soundTrueOnEar/colorPicker/purple.png';
    $scope.changeBackground = function (id) {
        $scope.background = $scope.colorList[id].headphonePath;
        console.log("it worked", $scope.background);
    };
    $scope.colorList = [{
        "ID": 1,
        colorPath: '../../assets/images/soundTrueOnEar/colorPicker/schemePurple.png',
        headphonePath: '../../assets/images/soundTrueOnEar/colorPicker/purple.png'
    }, {
        "ID": 2,
        colorPath: '../../assets/images/soundTrueOnEar/colorPicker/schemeBlack.png',
        headphonePath: '../../assets/images/soundTrueOnEar/colorPicker/black.png'
    }, {
        "ID": 3,
        colorPath: '../../assets/images/soundTrueOnEar/colorPicker/schemeTeal.png',
        headphonePath: '../../assets/images/soundTrueOnEar/colorPicker/teal.png'
    }, {
        "ID": 4, colorPath: '../../assets/images/soundTrueOnEar/colorPicker/schemeWhite.png',
        headphonePath: '../../assets/images/soundTrueOnEar/colorPicker/white.png'
    }];
});
'use strict';

angular.module('bose').controller('galleryCtrl', function ($scope) {

  $scope.showImage = {
    cellSelector: '.galleryImage',
    initialIndex: 0,
    prevNextButtons: false
  };
  // $('.carousel').carousel();
});
'use strict';

angular.module('bose').controller('headphonesCtrl', function ($scope, mainService) {
    // $scope.test = 'controller works';
    // $scope.test1 = mainService.test1;

    mainService.getData().then(function (headphones) {
        $scope.headphones = headphones;
        console.log(headphones);
    });
});
'use strict';

angular.module('bose').controller('mainCtrl', function ($scope) {});
'use strict';

angular.module('bose').controller('videoCtrl', function () {

  $(function () {
    $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });

    $(window).resize(function () {
      $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
    });
  });
});
'use strict';

angular.module('bose').directive('circleButtonDirective', function () {
    return {
        restrict: 'AE',
        templateUrl: '../views/directives/circleButton.html',
        scope: {
            color: '='
        },
        controller: function controller($scope) {},
        link: function link(scope, element, attribute) {
            scope.plusColor = {
                'fill': scope.color
            };
        }
    };
});
'use strict';

angular.module('bose').directive('headerDirective', function () {
    return {
        restrict: 'E',
        templateUrl: '../views/directives/header.html'
    };
});
'use strict';

angular.module('bose').directive('headphoneColorDirective', function () {
    return {
        restrict: 'E',
        templateUrl: '../views/directives/headphoneColor.html'
    };
});
'use strict';

angular.module('bose').directive('leftSideMenuDirective', function () {
    return {
        restrict: 'AE',
        templateUrl: './views/directives/leftSideMenu.html'
    };
});
'use strict';

angular.module('bose').directive('rightSideMenuDirective', function () {
    return {
        restrict: 'AE',
        scope: {
            uplink: '@',
            downlink: '@'
        },
        templateUrl: './views/directives/rightSideMenu.html',
        controller: function controller($scope, $state) {
            // console.log($scope.link);
            $scope.upArrow = function () {
                var url = '' + $scope.uplink + '';
                // console.log(url);
                $state.go(url);
            };

            $scope.downArrow = function () {
                var url = '' + $scope.downlink + '';
                // console.log(url);
                $state.go(url);
            };
        }
    };
});
'use strict';

angular.module('bose').service('mainService', function ($http) {
    // this.test1 = 'service works'
    var baseUrl = "/images/headphones";
    // this.getData = function(){
    //     return $http({
    //         method: 'GET',
    //         url: baseUrl
    // }).then(function(response){
    //     console.log(response)
    //     if(response.status === 200){
    //         return response.data.resultss
    //     }
    //         return "Something Went Wrong"
    //     })
    // }
    this.getData = function () {
        return $http.get("/images/headphones/").then(function (resp) {
            console.log(resp.data);
            return resp;
        });
    };
});