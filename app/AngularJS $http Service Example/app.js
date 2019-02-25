var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
    $http({
        method : "GET",
        url : "welcome.html"
    }).then(function mySuccess(response) {
        $scope.myWelcome = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
});

app.controller('mySecCtrl', function($scope, $http) {
    $http.get("welcome.html")
        .then(function(response) {
            $scope.content = response.data;
            $scope.statuscode = response.status;
            $scope.statustext = response.statusText;
        });
});

app.controller('myThirdCtrl', function($scope, $http) {
    $http.get("wrongFilename.html")
        .then(function(response) {
            $scope.content = response.data;
        }, function(response) {
            $scope.content = "Something went wrong!";
        });
});

app.controller('customersCtrl', function($scope, $http) {
    $http.get("customers.json")
        .then(function(response) {
            $scope.myData = response.data.records;
        });
});