angular.module('bose').controller('headphonesCtrl',function($scope, mainService){
    // $scope.test = 'controller works';
    // $scope.test1 = mainService.test1;

        mainService.getData().then(function(headphones){
            $scope.headphones = headphones;
            console.log('we made it')
        })
    })