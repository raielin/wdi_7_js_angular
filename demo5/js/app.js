// initialize the app
angular.module('Demo', []);

// main controller
angular.module('Demo').controller('MainCtrl', function($scope, $http) {
    'use strict';

    // $http is a built-in "service" in Angular, or a bundle of functions
    // Have to pass in a function along with the scope so Angular knows what function to inject
    $http.get('http://localhost:3000/users').success(function(response) {
        $scope.users = response;
    });
});
