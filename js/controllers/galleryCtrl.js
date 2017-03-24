angular.module('bose').controller('galleryCtrl', function($scope) {
    $scope.slides = [
        '../assets/images/soundTrueOnEar/gallery/whiteWithWheel.jpg',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg'
    ]

    $scope.myCustomOptions = {
      cellSelector: '.mySlideClassName',
      initialIndex: 1,
      prevNextButtons: false,
    };

//     <img src="../assets/images/soundTrueOnEar/gallery/whiteWithWheel.jpg" alt="orange tree" width="100%"/>
//   <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg" alt="submerged" />
//   <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg" alt="look-out" />
//   <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg" alt="One World Trade" />
//   <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg" alt="drizzle" />
//   <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg" alt="cat nose" />
// </div>-->
});