var app = angular.module("myApp", []);

app.controller('myCtrl', function($scope) {

    $scope.countOver = 0;

    $scope.countClick = 0;

    $scope.clickFunction = function() {
        $scope.countClick++;
    };

    $scope.showMe = false;

    $scope.myFunc = function() {

        $scope.showMe = !$scope.showMe;
    };

    $scope.myCordFunc = function(myE) {
        $scope.x = myE.clientX;
        $scope.y = myE.clientY;
    };

});