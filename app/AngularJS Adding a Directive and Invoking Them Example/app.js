var app = angular.module("myApp", []);
app.directive("testDirective", function() {
    return {
        template : "<h1>Made by a directive!</h1>"
    };
});

app.directive('classDirective', function() {
   return {
      restrict: "C",
       template: "<h1>Made by a directive! Invoked by class</h1>"
   };
});

app.directive('commentDirective', function() {
   return {
      restrict: "M",
       replace: true,
       template: "<h1>Made by a directive! Invoked by comment</h1>"
   };
});