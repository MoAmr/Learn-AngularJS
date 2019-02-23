var app = angular.module('myApp', []);

app.directive("testDirective", function() {
   return {
      template: "I was made in a directive constructor!"
   };
});