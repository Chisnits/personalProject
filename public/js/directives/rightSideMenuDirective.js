angular.module('bose').directive('rightSideMenuDirective', function(){
    return {
        restrict: 'AE',
        scope: {
            uplink: '@',
            downlink: '@'
        },
        templateUrl: './views/directives/rightSideMenu.html',
        controller: function($scope, $state) {
            // console.log($scope.link);
            $scope.upArrow = function() {
                var url = '' + $scope.uplink + '';
                // console.log(url);
                $state.go(url);
            }

            $scope.downArrow = function() {
                var url = '' + $scope.downlink + '';
                // console.log(url);
                $state.go(url);
            }
        }   
    }
})