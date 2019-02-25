var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $location, $http, $timeout, $interval, hexafy) {

    $http.get("welcome.html").then(function(response) {
        $scope.myWelcome = response.data;
    });

    $scope.myUrl = $location.absUrl();
    $scope.myHeader = "Hello user!";

    $timeout(function() {
        $scope.myHeader = "How are you today?";
    }, 2000);

    $scope.theTime = new Date().toLocaleTimeString();
    $interval(function() {
        $scope.theTime = new Date().toLocaleTimeString();
    }, 1000);

    $scope.hex = hexafy.myFunc(255);

    $scope.counts = [255, 251, 200];

});

app.service('hexafy', function() {
    this.myFunc = function(x) {
        return x.toString(16);
    };
});

app.filter('myFormat', ['hexafy', function(hexafy) {
    return function(x) {
        return hexafy.myFunc(x);
    };
}]);