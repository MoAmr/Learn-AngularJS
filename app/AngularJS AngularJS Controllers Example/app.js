var app = angular.module('myApp', []);

app.controller('personCtrl', function($scope) {
    $scope.firstName = "Mohammed";
    $scope.lastName = "Amr";
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    };
});