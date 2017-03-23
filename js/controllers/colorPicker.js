angular.module('bose').controller('colorPicker', function($scope){
$scope.test = 'bother';
function run(){
    $scope.headphones="differentColors";
    var imageSource;
    imageSource = '../../assets/images/soundTrueOnEar/colorPicker/'

    $scope.mediaList = [
        {
            imagePath:'../../assets/images/soundTrueOnEar/colorPicker/black.png'
        },
        {
            imagePath:'../../assets/images/soundTrueOnEar/colorPicker/purple.png'
        },
        {
            imagePath:'../../assets/images/soundTrueOnEar/colorPicker/teal.png'
        },
        {
            imagePath:'../../assets/images/soundTrueOnEar/colorPicker/white.png'
        }
    ]
};
run();
    
});