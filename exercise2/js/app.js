angular.module('Demo', []);

angular.module('Demo').controller('MainCtrl', function($scope) {
  'use strict';

  // Initialize a scope variable if you need the user to see something immediately when they load the page. If you don't, there's no real code reason to initialize it.
  $scope.total = 'total'

  var calc = function(newValue, oldValue) {
    if (!isNaN($scope.num1) && !isNaN($scope.num2)) {
      $scope.total = $scope.num1 + $scope.num2;
    }
  };


  // We're going to 'watch' the values of num1 and num2 and if anything changes, we're going to execute the function called calc.
  $scope.$watchGroup(['num1', 'num2'], calc);

  // OR this:
  // $scope.$watch('num1', calc);
  // $scope.$watch('num2', calc);

});
