// initialize the app
angular.module('Demo', []);

// main controller in Demo module
// We have to pass in the scope so that we have access to the scope
angular.module('Demo').controller('MainCtrl', function($scope, $http) {
  'use strict';

  // Anything we set on scope we can get to from our view.
  $http.get('http://localhost:3000/titles').success(function(response) {
    $scope.titles = response;
  });
});
