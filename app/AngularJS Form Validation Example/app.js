var app = angular.module('myApp', []);

app.directive('myDirective', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {
            function myValidation(value) {
                if (value.indexOf("e") > -1) {
                    myCtrl.$setValidity('charE', true);
                } else {
                    myCtrl.$setValidity('charE', false);
                }
                return value;
            }
            myCtrl.$parsers.push(myValidation);
        }
    };
});

app.controller('validateCtrl', function($scope) {
    $scope.user = 'Mohammed Amr';
    $scope.email = 'mohammed.amr@gmail.com';
});