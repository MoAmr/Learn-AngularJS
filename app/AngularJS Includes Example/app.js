var app = angular.module('myApp1', [])

app.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'https://tryit.w3schools.com/**'
    ]);
});