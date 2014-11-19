angular.module('Demo', []);

angular.module('Demo').controller('MainCtrl', function($scope) {
  'use strict';

  $scope.items = [{
    name: 'apples',
    price: 15.5,
    qty: 4
  }, {
    name: 'milk',
    price: 9,
    qty: 3
  }, {
    name: 'cereal',
    price: 34256.99999,
    qty: 1
  }, {
    name: 'brussel sprouts',
    price: 8.99,
    qty: 2
  }];
});
