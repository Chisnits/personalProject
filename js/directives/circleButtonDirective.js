angular.module('bose').directive('circleButtonDirective', function(){
    return {
        restrict: 'AE',
        templateUrl: '../views/directives/circleButton.html',
        scope:{
            color: '='
        },
        controller:function($scope){
        
        },
        link: function(scope,element,attribute){
            scope.plusColor = {
                'fill': scope.color
            }
      

        }
    }
})