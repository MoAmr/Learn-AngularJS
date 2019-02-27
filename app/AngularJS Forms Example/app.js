var app = angular.module('myApp', []);

app.controller('formCtrl', function($scope) {
    $scope.master = {firstName: "Mohammed", lastName: "Amr"};
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
});