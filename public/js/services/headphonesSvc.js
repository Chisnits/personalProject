angular.module('bose').service('mainService',function($http){
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
    this.getData = function() {
        return $http.get("/images/headphones/").then(function(resp) {
            console.log(resp.data)
            return resp
        })
    }
})