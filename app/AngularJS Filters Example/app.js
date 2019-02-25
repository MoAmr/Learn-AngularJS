var app = angular.module('myApp', []);

app.controller('personCtrl', function($scope) {
    $scope.firstName = 'Mohammed';
    $scope.lastName = 'Amr';
});

app.controller('namesAndCountriesCtrl', function($scope) {
    $scope.names = [
        {name: 'Jani', country: 'Norway'},
        {name: 'Carl', country: 'Sweden'},
        {name: 'Margareth', country: 'England'},
        {name: 'Hege', country: 'Norway'},
        {name: 'Joe', country: 'Denmark'},
        {name: 'Gustav', country: 'Sweden'},
        {name: 'Birgit', country: 'Denmark'},
        {name: 'Mary', country: 'England'},
        {name: 'Mohammed', country: 'Egypt'},
        {name: 'Tony', country: 'Germany'}
    ];
});

app.controller('namesCtrl', function($scope) {
    $scope.names = [
        'Jani',
        'Carl',
        'Margareth',
        'Hege',
        'Joe',
        'Gustav',
        'Birgit',
        'Mary',
        'Mohammed',
        'Kai'
    ];
});

app.controller('filteredNamesCtrl', function($scope) {
    $scope.names = [
        'Jani',
        'Carl',
        'Margareth',
        'Hege',
        'Joe',
        'Gustav',
        'Birgit',
        'Mary',
        'Mohammed',
        'Kai'
    ];
});

app.controller('tableCtrl', function($scope) {
    $scope.names = [
        {name: 'Jani', country: 'Norway'},
        {name: 'Carl', country: 'Sweden'},
        {name: 'Margareth', country: 'England'},
        {name: 'Hege', country: 'Norway'},
        {name: 'Joe', country: 'Denmark'},
        {name: 'Gustav', country: 'Sweden'},
        {name: 'Birgit', country: 'Denmark'},
        {name: 'Mary', country: 'England'},
        {name: 'Mohammed', country: 'Egypt'},
        {name: 'Tony', country: 'Germany'}
    ];
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }
});

app.filter('myFormat', function() {
    return function(x) {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            c = x[i];
            if (i % 2 == 0) {
                c = c.toUpperCase();
            }
            txt += c;
        }
        return txt;
    };
});

app.controller('costCtrl', function($scope) {
   $scope.price = 1000;
});