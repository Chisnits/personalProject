angular.module('bose').controller('colorPicker', function($scope){
$scope.test = 'bother';
function run(){
    $scope.headphones="differentColors";
    var imageSource;
    imageSource = '../../assets/images/soundTrueOnEar/colorPicker/'

    $scope.mediaList = [
        {
            "ID":1, imagePath:'../../assets/images/soundTrueOnEar/colorPicker/schemeBlack.png'
        },
        {
            "ID":2, imagePath:'../../assets/images/soundTrueOnEar/colorPicker/schemePurple.png'
        },
        {
            "ID":3, imagePath:'../../assets/images/soundTrueOnEar/colorPicker/schemeTeal.png'
        },
        {
            "ID":4, imagePath:'../../assets/images/soundTrueOnEar/colorPicker/schemeWhite.png'
        }
    ]
};
run();
    
});