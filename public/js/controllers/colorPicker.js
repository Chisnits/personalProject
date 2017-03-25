angular.module('bose').controller('colorPicker', function($scope){
$scope.test = 'bother';
$scope.background = '../../assets/images/soundTrueOnEar/colorPicker/purple.png'
$scope.changeBackground = function(id){
    $scope.background = $scope.colorList[id].headphonePath
    console.log("it worked", $scope.background)
}
$scope.colorList = [
    {
        "ID":1, 
        colorPath:'../../assets/images/soundTrueOnEar/colorPicker/schemePurple.png',
        headphonePath:'../../assets/images/soundTrueOnEar/colorPicker/purple.png'
    },
    {
        "ID":2, 
        colorPath:'../../assets/images/soundTrueOnEar/colorPicker/schemeBlack.png',
        headphonePath:'../../assets/images/soundTrueOnEar/colorPicker/black.png'
    },
    {
        "ID":3, 
        colorPath:'../../assets/images/soundTrueOnEar/colorPicker/schemeTeal.png',
        headphonePath:'../../assets/images/soundTrueOnEar/colorPicker/teal.png'
    },
    {
        "ID":4, colorPath:'../../assets/images/soundTrueOnEar/colorPicker/schemeWhite.png',
        headphonePath:'../../assets/images/soundTrueOnEar/colorPicker/white.png'
    }
]
    
});