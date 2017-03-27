angular.module('bose').service('mainService',function($http){
    // this.test1 = 'service works'
    var baseUrl = "/images/headphones";
    this.getData = function(headphones){
        return $http({
            method: 'GET',
            url: baseUrl
    }).then(function(response){
        console.log(response.data.results)
        if(response.status === 200){
            return response.data.results
        }
            return "Something Went Wrong"
        })
    }
})