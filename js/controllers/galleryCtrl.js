angular.module('bose').controller('galleryCtrl', function($scope) {

    $scope.showImage = {
      cellSelector: '.galleryImage',
      initialIndex: 0,
      prevNextButtons: false,
    };
});