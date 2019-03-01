var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "main.html"
        })
        .when("/london", {
            templateUrl : "london.html",
            controller : "londonCtrl"
        })
        .when("/paris", {
            templateUrl : "paris.html",
            controller : "parisCtrl"
        })
        .otherwise({
            template : "<h1>None</h1><p>Nothing has been selected!</p>"
        });
});

app.controller("londonCtrl", function($scope) {
    $scope.msg = "I love London";
});

app.controller("parisCtrl", function($scope) {
    $scope.msg = "I love Paris";
});