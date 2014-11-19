angular.module('Demo', []);
angular.module('Demo').controller('MainCtrol', function($scope) {
  'use strict';

  var calc = function(newValue, oldValue) {
    if (!isNaN($scope.num1) && !isNaN($scope.num2)) {
      $scope.answer = $scope.num1 + $scope.num2;
    }
  };

  $scope.$watchGroup(['num1', 'num2'], calc);
})
